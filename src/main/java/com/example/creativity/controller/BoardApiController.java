package com.example.creativity.controller;

import com.example.creativity.Model.Board;
import com.example.creativity.repository.BoardRepository;
import com.example.creativity.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BoardApiController {

    @Autowired
    private com.example.creativity.repository.BoardRepository BoardRepository;

    @Autowired
    private BoardService boardService;


    @GetMapping("/board")
    List<Board> all() {
        return BoardRepository.findAll();
    }

    @PostMapping("/board")
    Board newBoard(@RequestBody Board newBoard) {
        return BoardRepository.save(newBoard);
    }

//    @GetMapping("/board/{id}")
//    Board one(@PathVariable Long id) {
//
//        return BoardRepository.findById(id)
//                .orElseThrow(() -> new BoardNotFoundException(id));
//    }
//
//    @PutMapping("/board/{id}")
//    Board replaceBoard(@RequestBody Board newBoard, @PathVariable Long id) {
//
//        return BoardRepository.findById(id)
//                .map(employee -> {
//                    employee.setName(newBoard.getName());
//                    employee.setRole(newBoard.getRole());
//                    return BoardRepository.save(employee);
//                })
//                .orElseGet(() -> {
//                    newBoard.setId(id);
//                    return BoardRepository.save(newBoard);
//                });
//    }

    @PutMapping("/board/read/like/{id}")
    void likeBoard(@PathVariable Long id, Authentication authentication) {
        String authenticationName = authentication.getName();
        boardService.likeBoard(id, authenticationName);
    }

    @DeleteMapping("/board/{id}")
    void deleteBoard(@PathVariable Long id) {
        BoardRepository.deleteById(id);
    }
}
