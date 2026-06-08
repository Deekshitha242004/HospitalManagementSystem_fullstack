package com.example.Hospital.Management.System.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;

    private String patientName;
    private int patientAge;
    private String patientGender;

    // Getter for patientId
    public Long getPatientId() {
        return patientId;
    }

    // Setter for patientId
    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    // Getter for patientName
    public String getPatientName() {
        return patientName;
    }

    // Setter for patientName
    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    // Getter for patientAge
    public int getPatientAge() {
        return patientAge;
    }

    // Setter for patientAge
    public void setPatientAge(int patientAge) {
        this.patientAge = patientAge;
    }

    // Getter for patientGender
    public String getPatientGender() {
        return patientGender;
    }

    // Setter for patientGender
    public void setPatientGender(String patientGender) {
        this.patientGender = patientGender;
    }
}