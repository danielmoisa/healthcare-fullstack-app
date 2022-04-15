import React from 'react'

function PatientsTableHeader() {
    return (
        <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Patient</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-center">Height</th>
                <th className="py-3 px-6 text-center">Weight</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
            </tr>
        </thead>
    )
}

export default PatientsTableHeader