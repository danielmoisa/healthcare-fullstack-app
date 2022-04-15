package com.danielmoisa.healthcare.services

import com.danielmoisa.healthcare.entities.Patient
import com.danielmoisa.healthcare.repositories.PatientRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class PatientService(private val patientRepository: PatientRepository) {
    fun getPatient(): MutableIterable<Patient> = patientRepository.findAll()

    fun addPatient(patient: Patient): ResponseEntity<Patient> {
        return ResponseEntity.ok(patientRepository.save((patient)))
    }
}