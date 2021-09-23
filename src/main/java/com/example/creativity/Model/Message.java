package com.example.creativity.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sender;
    private String receiver;
    private String content;
    private String date;
    private boolean checked;

    @ManyToOne
    @JoinColumn(name = "sender", insertable = false, updatable = false)
    private User senderUser;

    @ManyToOne
    @JoinColumn(name = "receiver", insertable = false, updatable = false)
    private User receiverUser;
}
