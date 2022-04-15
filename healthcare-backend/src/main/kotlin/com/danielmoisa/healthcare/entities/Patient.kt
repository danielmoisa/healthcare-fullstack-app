package com.danielmoisa.healthcare.entities

import com.danielmoisa.healthcare.enums.Status
import javax.persistence.*

@Entity
@Table(name = "patients")
data class Patient(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val firstName: String,
    val lastName: String,
    val phoneNumber: Long,
    val email: String,
    val height: Long,
    val weight: Long,
    val age: Long,
    val status: Status
) {}
