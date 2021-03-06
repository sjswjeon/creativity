package com.example.creativity.service;

import com.example.creativity.Model.Role;
import com.example.creativity.Model.User;
import com.example.creativity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User save(User user) {
        String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        user.setDate(date);
        user.setEnabled(true);
        user.setLevel("Level1");
        user.setPoint(0L);
        Role role = new Role();
        role.setId(1L);
        user.getRoles().add(role);

        return userRepository.save(user);
    }
}
