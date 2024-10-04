package com.example.contactform.controller;

import com.example.contactform.model.Contact;
import com.example.contactform.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendContactForm(@RequestBody Contact contact) {
        try {
            // Extract relevant fields from the contact object
            String toEmail = contact.getEmail(); // Assumed your Contact class has getEmail()
            String subject = "Contact Form Submission from " + contact.getName(); // You can customize this
            String messageBody = contact.getMessage(); // Assuming there's a getMessage() method
            
            // Use the sendEmail method correctly
            emailService.sendEmail(toEmail, subject, messageBody);

            return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
