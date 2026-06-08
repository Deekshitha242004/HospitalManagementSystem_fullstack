package com.example.Hospital.Management.System.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Hospital.Management.System.entity.Doctor;
import com.example.Hospital.Management.System.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }

    // ✅ CORRECT: separate method
    public Doctor updateDoctor(Long id, Doctor doctor) {
        Doctor existingDoctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor not found with id " + id));

        existingDoctor.setDoctorName(doctor.getDoctorName());
        existingDoctor.setSpecialization(doctor.getSpecialization());
        existingDoctor.setExperience(doctor.getExperience());

        return doctorRepository.save(existingDoctor);
    }
}