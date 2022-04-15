package com.danielmoisa.healthcare.controllers

import com.danielmoisa.healthcare.entities.Patient
import com.danielmoisa.healthcare.services.PatientService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping("/api")
class PatientController(private val patientService: PatientService) {

    @GetMapping("/patients")
    fun getPatients(): MutableIterable<Patient> = patientService.getPatient()

    @PostMapping("/patients")
    fun addPatient(patient: Patient): ResponseEntity<Patient> = patientService.addPatient(patient)
}