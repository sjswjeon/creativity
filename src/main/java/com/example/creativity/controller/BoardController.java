package com.example.creativity.controller;

import com.example.creativity.Model.Board;
import com.example.creativity.Model.Comment;
import com.example.creativity.Model.User;
import com.example.creativity.repository.BoardRepository;
import com.example.creativity.repository.UserRepository;
import com.example.creativity.service.BoardService;
import com.example.creativity.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BoardService boardService;

    @Autowired
    private CommentService commentService;

    @GetMapping("/list")
    public String list(Model model, @RequestParam(required = false, defaultValue = "") String searchText, @PageableDefault(size = 18, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Board> boards = boardRepository.findByTitleContainingOrContentContaining(searchText, searchText, pageable);
        model.addAttribute("boards", boards);
        model.addAttribute("board", new Board());
        return "board/list";
    }

    @PostMapping("/list")
    public String savePost(@ModelAttribute Board board, Authentication authentication) {
        String authenticationName = authentication.getName();
        boardService.save(board, authenticationName);
        return "redirect:/board/list";
    }

    @GetMapping("/read")
    public String read(@RequestParam Long id, Model model, Authentication authentication) {
        Board board = boardRepository.findById(id).orElse(null);
        boardService.read(board);
        List<Comment> allFirstComments = commentService.findAllFirstComments(board);
        String authenticationName = authentication.getName();
        User user = userRepository.findByUsername(authenticationName);

        model.addAttribute("user", user);
        model.addAttribute("board", board);
        model.addAttribute("firstcomments", allFirstComments);
        return "board/read";
    }

    @PostMapping("/read/firstcomment")
    public String firstComment(Comment comment, Authentication authentication) {
        String authenticationName = authentication.getName();
        commentService.save(comment, authenticationName);

        return "redirect:/board/read?id=" + comment.getBoardid();
    }

    @PostMapping("/read/secondcomment")
    public String secondComment(Comment comment, Authentication authentication) {
        String authenticationName = authentication.getName();
        commentService.saveSecondComment(comment, authenticationName);

        return "redirect:/board/read?id=" + comment.getBoardid();
    }
}
