package com.example.creativity.service;

import com.example.creativity.Model.Board;
import com.example.creativity.Model.Comment;
import com.example.creativity.Model.User;
import com.example.creativity.repository.BoardRepository;
import com.example.creativity.repository.CommentRepository;
import com.example.creativity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager entityManager;

    @Transactional
    public Comment save(Comment comment, String username) {
        entityManager.persist(comment);
        String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        comment.setCommentid(comment.getId());
        comment.setUsername(username);
        comment.setDepth(0L);
        comment.setDate(date);

        return commentRepository.save(comment);
    }

    public Comment saveSecondComment(Comment comment, String username) {
        String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        User user = userRepository.findByUsername(username);
        comment.setUsername(username);
        comment.setDepth(comment.getDepth()+1L);
        comment.setDate(date);

        return commentRepository.save(comment);
    }

    public List<Comment> findAllFirstComments(Board board) {
        List<Comment> comments = board.getComments();
        List<Comment> firstComments = new ArrayList<>();
        for (Comment comment : comments) {
            if (comment.getDepth() == 0L) {
                firstComments.add(comment);
            }
        }
        return firstComments;
    }

}
