package com.example.Hospital.Management.System.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Hospital.Management.System.dto.AppointmentRequest;
import com.example.Hospital.Management.System.dto.AppointmentResponse;
import com.example.Hospital.Management.System.entity.Appointment;
import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.entity.Doctor;
import com.example.Hospital.Management.System.repository.AppointmentRepository;
import com.example.Hospital.Management.System.repository.PatientRepository;
import com.example.Hospital.Management.System.repository.DoctorRepository;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;

    public AppointmentService(AppointmentRepository appointmentRepository,
                              PatientRepository patientRepository,
                              DoctorRepository doctorRepository) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
    }

    // ✅ CREATE APPOINTMENT (returns clean DTO)
    public AppointmentResponse createAppointment(AppointmentRequest request) {

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setAppointmentDate(LocalDate.parse(request.getAppointmentDate()));

        Appointment saved = appointmentRepository.save(appointment);

        return new AppointmentResponse(
                saved.getAppointmentId(),
                saved.getAppointmentDate().toString(),
                saved.getPatient().getPatientName(),
                saved.getDoctor().getDoctorName()
        );
    }

    // ✅ GET ALL APPOINTMENTS (clean DTO list)
    public List<AppointmentResponse> getAllAppointmentsDTO() {

        return appointmentRepository.findAll().stream().map(app -> {

            AppointmentResponse response = new AppointmentResponse();

            response.setAppointmentId(app.getAppointmentId());
            response.setAppointmentDate(app.getAppointmentDate().toString());
            response.setPatientName(app.getPatient().getPatientName());
            response.setDoctorName(app.getDoctor().getDoctorName());

            return response;

        }).toList();
    }
}