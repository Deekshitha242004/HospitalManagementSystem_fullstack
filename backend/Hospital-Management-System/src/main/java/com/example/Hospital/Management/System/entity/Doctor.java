package com.example.Hospital.Management.System.entity;

import jakarta.persistence.*;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long doctorId;

    private String doctorName;
    private String specialization;
    private int experience;

    // Constructors
    public Doctor() {}

    public Doctor(String doctorName, String specialization, int experience) {
        this.doctorName = doctorName;
        this.specialization = specialization;
        this.experience = experience;
    }

    // Getters & Setters
    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }
}

