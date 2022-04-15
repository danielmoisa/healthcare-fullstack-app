import React from 'react'
import PatientsTableBody from './PatientsTableBody'
import PatientsTableHeader from './PatientsTableHeader'

function PatientsTable() {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <PatientsTableHeader />
                            <PatientsTableBody />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsTable