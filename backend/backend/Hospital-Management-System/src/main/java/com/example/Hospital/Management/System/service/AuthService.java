package com.example.Hospital.Management.System.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.Hospital.Management.System.repository.UserRepository;
import com.example.Hospital.Management.System.entity.User;
import com.example.Hospital.Management.System.entity.Role;
import com.example.Hospital.Management.System.dto.LoginRequest;
import com.example.Hospital.Management.System.dto.RegisterRequest;
import java.util.Map;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ REGISTER METHOD (UPDATED)
    public String register(RegisterRequest request){

        System.out.println("Incoming email: " + request.getEmail()); // ✅ DEBUG

        if(userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Email already exists");
        }

        try {
            User user = new User();
            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(request.getRole() != null ? request.getRole() : Role.PATIENT);

            userRepository.save(user);

            return "User Registered Successfully";

        } catch (Exception e) {
            e.printStackTrace();   // ✅ VERY IMPORTANT
            throw new RuntimeException("Registration failed");
        }
    }

    // ✅ LOGIN METHOD (PUT IT HERE)
    public Map<String, Object> login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return Map.of(
                "message", "Login Successful",
                "role", user.getRole().name()
        );
    }
}

