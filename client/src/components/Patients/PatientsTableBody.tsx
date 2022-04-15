import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PatientsTableSingle from './PatientsTableSingle'

export type Patient = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    height: number,
    weight: number,
    status: 'Active' | 'Inactive',
}

function PatientsTableBody() {
    const [patients, setPatients] = useState<Patient[]>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(
                    'http://localhost:8080/api/patients',
                );

                setPatients(result.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <tbody className="text-gray-600 text-sm font-light">
            {patients?.map(patient => (<React.Fragment key={patient?.id}><PatientsTableSingle patient={patient} /></React.Fragment>))}
        </tbody>
    )
}

export default PatientsTableBody