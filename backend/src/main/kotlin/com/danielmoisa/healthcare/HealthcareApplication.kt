package com.danielmoisa.healthcare

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@SpringBootApplication
class HealthcareApplication

fun main(args: Array<String>) {

	runApplication<HealthcareApplication>(*args)

}

