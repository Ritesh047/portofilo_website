package com.example.contactform.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Corrected the mapping from /api/contect to /api/contact
        registry.addMapping("/api/contact") // Adjust to your API path
                .allowedOrigins("http://localhost:3000") // Change this to your frontend URL
                .allowedMethods("POST", "GET", "PUT", "DELETE")
                .allowCredentials(true); // Allows sending credentials (like cookies)
    }
}
