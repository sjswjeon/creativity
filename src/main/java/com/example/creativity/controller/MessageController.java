package com.example.creativity.controller;

import com.example.creativity.Model.Message;
import com.example.creativity.Model.User;
import com.example.creativity.repository.MessageRepository;
import com.example.creativity.repository.UserRepository;
import com.example.creativity.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/list")
    public String list(Model model, Authentication authentication, @PageableDefault(size = 7, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        String authenticationName = authentication.getName();
//        List<Message> allSentMessages = messageService.findAllSentMessages(authenticationName);
//        List<Message> receivedMessagesForRightBox = messageService.findAllReceivedMessages(authenticationName);
        Page<Message> allReceivedMessages = messageRepository.findAllByReceiver(authenticationName, pageable);
        Page<Message> allSentMessages = messageRepository.findAllBySender(authenticationName, pageable);

        model.addAttribute("sentMessages", allSentMessages);
        model.addAttribute("receivedMessages", allReceivedMessages);

        return "/message/message";
    }

    @PostMapping("/new")
    public String sendNewMessage(Message message, Authentication authentication) {
        String authenticationName = authentication.getName();

        messageService.sendNewMessage(message, authenticationName);

        return "redirect:/message/list";
    }

    @GetMapping("/read")
    public String read(Model model, Authentication authentication, @RequestParam Long id, @PageableDefault(size = 7, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        Message message = messageRepository.findById(id).orElse(null);
        model.addAttribute("message", message);

        String authenticationName = authentication.getName();
//        List<Message> allSentMessages = messageService.findAllSentMessages(authenticationName);
//        List<Message> allReceivedMessages = messageService.findAllReceivedMessages(authenticationName);

        Page<Message> allReceivedMessages = messageRepository.findAllByReceiver(authenticationName, pageable);
        Page<Message> allSentMessages = messageRepository.findAllBySender(authenticationName, pageable);

        model.addAttribute("sentMessages", allSentMessages);
        model.addAttribute("receivedMessages", allReceivedMessages);
        return "/message/message-read";
    }
}
