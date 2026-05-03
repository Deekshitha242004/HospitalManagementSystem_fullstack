package com.example.Hospital.Management.System.dto;

public class AppointmentResponse {

    private Long appointmentId;
    private String appointmentDate;
    private String patientName;
    private String doctorName;

    public AppointmentResponse() {}

    public AppointmentResponse(Long appointmentId, String appointmentDate,
                               String patientName, String doctorName) {
        this.appointmentId = appointmentId;
        this.appointmentDate = appointmentDate;
        this.patientName = patientName;
        this.doctorName = doctorName;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }
}



