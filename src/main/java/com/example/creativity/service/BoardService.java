package com.example.creativity.service;

import com.example.creativity.Model.Board;
import com.example.creativity.Model.User;
import com.example.creativity.repository.BoardRepository;
import com.example.creativity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    public Board save(Board board, String username) {
        String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        User user = userRepository.findByUsername(username);
        board.setUser(user);
        board.setUsername(username);
        board.setView(0L);
        board.setLikes(0L);
        if (board.getDate().isEmpty()) {
            board.setDate(date);
            user.setPoint(user.getPoint()+100L);
        }

        return boardRepository.save(board);
    }

    public Board read(Board board) {
        board.setView(board.getView()+1L);
        return boardRepository.save(board);
    }

    public Board likeBoard(Long id, String username) {
        Board board = boardRepository.findById(id).orElse(null);
        User user = userRepository.findByUsername(username);

        if (board.getLikedUsers().contains(user)) {
            board.getLikedUsers().remove(user);
        } else {
            board.getLikedUsers().add(user);
        }

        return boardRepository.save(board);
    }
}
