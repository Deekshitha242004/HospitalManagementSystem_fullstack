package com.example.Hospital.Management.System.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "prescriptions")
public class PatientPrescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String medicine;
    private String dosage;
    private String instructions;

    // 🔥 FIXED PART
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    @JsonIgnore
    private Patient patient;

    // Getters

    public Long getId() {
        return id;
    }

    public String getMedicine() {
        return medicine;
    }

    public String getDosage() {
        return dosage;
    }

    public String getInstructions() {
        return instructions;
    }

    public Patient getPatient() {
        return patient;
    }

    // Setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}