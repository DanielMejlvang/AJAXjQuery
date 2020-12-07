package com.daniel.frontend.controller;

import com.daniel.frontend.model.AJAXrequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {
    @PostMapping("/api/sendMessage")
    public ResponseEntity<String> sendMessage(@RequestBody AJAXrequest request) {
        return ResponseEntity.ok(request.getMessage());
    }
}
