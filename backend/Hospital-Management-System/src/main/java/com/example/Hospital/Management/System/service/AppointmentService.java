package com.example.Hospital.Management.System.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Hospital.Management.System.dto.AppointmentRequest;
import com.example.Hospital.Management.System.dto.AppointmentResponse;
import com.example.Hospital.Management.System.entity.Appointment;
import com.example.Hospital.Management.System.entity.Doctor;
import com.example.Hospital.Management.System.entity.Patient;
import com.example.Hospital.Management.System.repository.AppointmentRepository;
import com.example.Hospital.Management.System.repository.DoctorRepository;
import com.example.Hospital.Management.System.repository.PatientRepository;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;

    public AppointmentService(
            AppointmentRepository appointmentRepository,
            PatientRepository patientRepository,
            DoctorRepository doctorRepository) {

        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
    }

    // CREATE APPOINTMENT
    public AppointmentResponse createAppointment(AppointmentRequest request) {

        Patient patient = new Patient();

        patient.setPatientName(request.getPatientName());
        patient.setPatientAge(request.getPatientAge());
        patient.setPatientGender(request.getPatientGender());

        patient = patientRepository.save(patient);

        Doctor doctor =
                doctorRepository.findByDoctorName(
                        request.getDoctorName());

        if (doctor == null) {
            throw new RuntimeException("Doctor not found");
        }

        Appointment appointment = new Appointment();

        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setDisease(request.getDisease());

        appointment.setAppointmentDate(
                LocalDate.parse(
                        request.getAppointmentDate()));

        Appointment saved =
                appointmentRepository.save(appointment);

        return new AppointmentResponse(
                saved.getAppointmentId(),
                saved.getAppointmentDate().toString(),
                saved.getPatient().getPatientName(),
                saved.getDoctor().getDoctorName(),
                saved.getDisease()
        );
    }

    // GET ALL APPOINTMENTS
    public List<AppointmentResponse> getAllAppointmentsDTO() {

        return appointmentRepository.findAll()
                .stream()
                .map(app -> new AppointmentResponse(
                        app.getAppointmentId(),
                        app.getAppointmentDate().toString(),
                        app.getPatient().getPatientName(),
                        app.getDoctor().getDoctorName(),
                        app.getDisease()
                ))
                .toList();
    }

    // GET APPOINTMENTS BY PATIENT
    public List<AppointmentResponse> getAppointmentsByPatient(Long patientId) {

        return appointmentRepository
                .findByPatientPatientId(patientId)
                .stream()
                .map(app -> new AppointmentResponse(
                        app.getAppointmentId(),
                        app.getAppointmentDate().toString(),
                        app.getPatient().getPatientName(),
                        app.getDoctor().getDoctorName(),
                        app.getDisease()
                ))
                .toList();
    }
}