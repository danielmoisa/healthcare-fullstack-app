package com.danielmoisa.healthcare.repositories

import com.danielmoisa.healthcare.entities.Patient
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface PatientRepository: CrudRepository<Patient, Long> {
}