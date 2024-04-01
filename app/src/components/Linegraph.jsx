import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

function Linegraph() {

    const archivedUniversityofIowa = {
        '2016': {
            nonDiscriminatoryPolicy: 5/25,
            transInclusionPolicy: 0/15,
            sexualHarassmentPolicy: 5/15,
            fanCodeOfConduct: 0/10,
            annualPartnershipCollaboration: 0/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 0/5,
            proLgbtqTrainingsForAthletes: 0/5,
            totalScore: 15/100
        },
        '2017': {
            nonDiscriminatoryPolicy: 10/25,
            transInclusionPolicy: 5/15,
            sexualHarassmentPolicy: 5/15,
            fanCodeOfConduct: 5/10,
            annualPartnershipCollaboration: 0/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 5/5,
            proLgbtqTrainingsForAthletes: 0/5,
            totalScore: 35/100
        },
        '2018': {
            nonDiscriminatoryPolicy: 20/25,
            transInclusionPolicy: 5/15,
            sexualHarassmentPolicy: 5/15,
            fanCodeOfConduct: 5/10,
            annualPartnershipCollaboration: 5/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 5/5,
            proLgbtqTrainingsForAthletes: 5/5,
            totalScore: 55/100
        },
        '2019': {
            nonDiscriminatoryPolicy: 20/25,
            transInclusionPolicy: 15/15,
            sexualHarassmentPolicy: 15/15,
            fanCodeOfConduct: 5/10,
            annualPartnershipCollaboration: 10/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 0/5,
            proLgbtqTrainingsForAthletes: 0/5,
            totalScore: 70/100
        },
        '2020': {
            nonDiscriminatoryPolicy: 20/25,
            transInclusionPolicy: 15/15,
            sexualHarassmentPolicy: 15/15,
            fanCodeOfConduct: 5/10,
            annualPartnershipCollaboration: 15/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 5/5,
            proLgbtqTrainingsForAthletes: 0/5,
            totalScore: 80/100
        },
        '2021': {
            nonDiscriminatoryPolicy: 25/25,
            transInclusionPolicy: 15/15,
            sexualHarassmentPolicy: 15/15,
            fanCodeOfConduct: 5/10,
            annualPartnershipCollaboration: 15/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 5/5,
            proLgbtqTrainingsForAthletes: 0/5,
            totalScore: 85/100
        },
        '2022': {
            nonDiscriminatoryPolicy: 15/25,
            transInclusionPolicy: 5/15,
            sexualHarassmentPolicy: 5/15,
            fanCodeOfConduct: 10/10,
            annualPartnershipCollaboration: 5/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 5/5,
            proLgbtqTrainingsForAthletes: 5/5,
            totalScore: 55/100
        },        
        '2023': {
            nonDiscriminatoryPolicy: 20/25,
            transInclusionPolicy: 0/15,
            sexualHarassmentPolicy: 5/15,
            fanCodeOfConduct: 10/10,
            annualPartnershipCollaboration: 0/15,
            lgbtqEducationalResources: 5/10,
            proLgbtqTrainingsForStaff: 0/5,
            proLgbtqTrainingsForAthletes: 5/5,
            totalScore: 45/100
        }
    }

    const labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']

    const options = {
        responsive: true,
        scale: {
            tick: {
                bounds: 'data',
            },
            y: {
                min: 0,
                max: 1,
            }
        },
        layout: {
            padding: 100,
        },
        interaction: {
            intersect: false,
            mode: 'index',
            position: 'nearest'
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'The University of Iowa'
            },
           
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Nondiscriminatory Policy',
                data: [
                    archivedUniversityofIowa['2016'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2017'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2018'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2019'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2020'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2021'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2022'].nonDiscriminatoryPolicy,
                    archivedUniversityofIowa['2023'].nonDiscriminatoryPolicy,
                ],
                borderColor: 'rgb(245, 131, 122)',
                backgroundColor: 'rgba(245, 131, 122, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Trans Inclusion Policy',
                data: [
                    archivedUniversityofIowa['2016'].transInclusionPolicy,
                    archivedUniversityofIowa['2017'].transInclusionPolicy,
                    archivedUniversityofIowa['2018'].transInclusionPolicy,
                    archivedUniversityofIowa['2019'].transInclusionPolicy,
                    archivedUniversityofIowa['2020'].transInclusionPolicy,
                    archivedUniversityofIowa['2021'].transInclusionPolicy,
                    archivedUniversityofIowa['2022'].transInclusionPolicy,
                    archivedUniversityofIowa['2023'].transInclusionPolicy,
                ],
                borderColor: 'rgb(245, 167, 122)',
                backgroundColor: 'rgba(245, 167, 122, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Sexual Harassment Policy',
                data: [
                    archivedUniversityofIowa['2016'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2017'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2018'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2019'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2020'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2021'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2022'].sexualHarassmentPolicy,
                    archivedUniversityofIowa['2023'].sexualHarassmentPolicy,
                ],
                borderColor: 'rgb(245, 231, 122)',
                backgroundColor: 'rgba(245, 231, 122, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Fan Code of Conduct',
                data: [
                    archivedUniversityofIowa['2016'].fanCodeOfConduct,
                    archivedUniversityofIowa['2017'].fanCodeOfConduct,
                    archivedUniversityofIowa['2018'].fanCodeOfConduct,
                    archivedUniversityofIowa['2019'].fanCodeOfConduct,
                    archivedUniversityofIowa['2020'].fanCodeOfConduct,
                    archivedUniversityofIowa['2021'].fanCodeOfConduct,
                    archivedUniversityofIowa['2022'].fanCodeOfConduct,
                    archivedUniversityofIowa['2023'].fanCodeOfConduct,
                ],
                borderColor: 'rgb(200, 245, 122)',
                backgroundColor: 'rgba(200, 245, 122, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Annual Partnership / Collaboration',
                data: [
                    archivedUniversityofIowa['2016'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2017'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2018'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2019'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2020'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2021'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2022'].annualPartnershipCollaboration,
                    archivedUniversityofIowa['2023'].annualPartnershipCollaboration,
                ],
                borderColor: 'rgb(122, 245, 136)',
                backgroundColor: 'rgba(122, 245, 136, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'LGBTQ Educational Resources',
                data: [
                    archivedUniversityofIowa['2016'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2017'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2018'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2019'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2020'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2021'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2022'].lgbtqEducationalResources,
                    archivedUniversityofIowa['2023'].lgbtqEducationalResources,
                ],
                borderColor: 'rgb(122, 245, 233)',
                backgroundColor: 'rgba(122, 245, 233, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Pro-LGBTQ Trainings for Staff',
                data: [
                    archivedUniversityofIowa['2016'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2017'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2018'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2019'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2020'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2021'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2022'].proLgbtqTrainingsForStaff,
                    archivedUniversityofIowa['2023'].proLgbtqTrainingsForStaff,
                ],
                borderColor: 'rgb(122, 138, 245',
                backgroundColor: 'rgba(122, 138, 245, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Pro-LGBTQ Trainings for Athletes',
                data: [
                    archivedUniversityofIowa['2016'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2017'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2018'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2019'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2020'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2021'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2022'].proLgbtqTrainingsForAthletes,
                    archivedUniversityofIowa['2023'].proLgbtqTrainingsForAthletes,
                ],
                borderColor: 'rgb(194, 122, 245)',
                backgroundColor: 'rgba(194, 122, 245, 0.5)',
                tension: '',
                hidden: true
            },
            {
                label: 'Total Score',
                data: [
                    archivedUniversityofIowa['2016'].totalScore,
                    archivedUniversityofIowa['2017'].totalScore,
                    archivedUniversityofIowa['2018'].totalScore,
                    archivedUniversityofIowa['2019'].totalScore,
                    archivedUniversityofIowa['2020'].totalScore,
                    archivedUniversityofIowa['2021'].totalScore,
                    archivedUniversityofIowa['2022'].totalScore,
                    archivedUniversityofIowa['2023'].totalScore,
                ],
                borderColor: 'rgb(245, 122, 214)',
                backgroundColor: 'rgba(245, 122, 214, 0.5)',
                tension: '',
            }
        ]
    }

    const graphToggleOptions = (data.datasets).map(metric => 
        <li key={metric.label}>
            <label onClick={() => {
                metric.hidden = !metric.hidden
            }}>
                <input type='checkbox' />
                {metric.label}
            </label>
        </li>
    )

    return (
        <div>
            <Line data={data} options={options} />
            <ul className='graph-options'>
                {graphToggleOptions}
            </ul>
        </div>
    )
}

export default Linegraph