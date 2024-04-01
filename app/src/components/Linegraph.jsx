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

ChartJS.defaults.font.family = "'Montserrat', 'sans-serif'"
ChartJS.defaults.font.size = 16

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

    const nonDiscriminatoryPolicyScores = Object.values(archivedUniversityofIowa).map(item => item.nonDiscriminatoryPolicy)
    const transInclusionPolicyScores = Object.values(archivedUniversityofIowa).map(item => item.transInclusionPolicy)
    const sexualHarassmentPolicyScores = Object.values(archivedUniversityofIowa).map(item => item.sexualHarassmentPolicy)
    const fanCodeOfConductScores = Object.values(archivedUniversityofIowa).map(item => item.fanCodeOfConduct)
    const annualPartnershipCollaborationScores = Object.values(archivedUniversityofIowa).map(item => item.annualPartnershipCollaboration)
    const lgbtqEducationalResourcesScores = Object.values(archivedUniversityofIowa).map(item => item.lgbtqEducationalResources)
    const proLgbtqTrainingsForStaffScores = Object.values(archivedUniversityofIowa).map(item => item.proLgbtqTrainingsForStaff)
    const proLgbtqTrainingsForAthletesScores = Object.values(archivedUniversityofIowa).map(item => item.proLgbtqTrainingsForAthletes)
    const totalScoreScores = Object.values(archivedUniversityofIowa).map(item => item.totalScore)


    const labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        clip: false,
        layout: {
            padding: 0,
        },
        scale: {
            y: {
                min: 0,
                max: 1,
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function(val) {
                        return (val * 100) + "%"
                    }
                },
                title: {
                    display: true,
                    text: 'Score Percentage',  
                }
            },
            x : {
                title: {
                    display: true,
                    text: 'Years',
                }
            }
        },
        animation: {
            duration: 300,
            easing: 'easeInOutCubic'
        },
        interaction: {
            intersect: false,
            mode: 'x',
            position: 'nearest'
        },
        plugins: {
            title: {
                display: true,
                text: 'Trends and Changes',
                font: {
                    size: 30,
                    weight: 600
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ": " + Math.round(context.raw * 100) + "%"
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                    generateLabels: (chart) => {
                        return chart.data.datasets.map(
                            (dataset, index) => ({
                                text: dataset.label,
                                fillStyle: dataset.backgroundColor,
                                strokeStyle: dataset.borderColor,
                                fontColor: chart.isDatasetVisible(index) ? '#666' : '#AAA',
                                datasetIndex: index,
                            })
                        )
                    }
                },
                onClick: (click, legendItem, legend) => {
                    const index = legendItem.datasetIndex
                    const lc = legend.chart
                    if (lc.isDatasetVisible(index)) {
                        lc.hide(index)
                    } else {
                        lc.show(index)
                    }
                },
                onHover: (event, chartElement) => {
                    event.native.target.style.cursor = 'pointer'
                },
                onLeave: (event, chartElement) => {
                    event.native.target.style.cursor = 'default'
                }
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Nondiscriminatory Policy',
                data: nonDiscriminatoryPolicyScores,
                borderColor: 'rgb(245, 131, 122)',
                backgroundColor: 'rgba(245, 131, 122, 0.5)',
                hidden: true
            },
            {
                label: 'Trans Inclusion Policy',
                data: transInclusionPolicyScores,
                borderColor: 'rgb(245, 167, 122)',
                backgroundColor: 'rgba(245, 167, 122, 0.5)',
                hidden: true
            },
            {
                label: 'Sexual Harassment Policy',
                data: sexualHarassmentPolicyScores,
                borderColor: 'rgb(245, 231, 122)',
                backgroundColor: 'rgba(245, 231, 122, 0.5)',
                hidden: true
            },
            {
                label: 'Fan Code of Conduct',
                data: fanCodeOfConductScores,
                borderColor: 'rgb(200, 245, 122)',
                backgroundColor: 'rgba(200, 245, 122, 0.5)',
                hidden: true
            },
            {
                label: 'Annual Partnership / Collaboration',
                data: annualPartnershipCollaborationScores,
                borderColor: 'rgb(122, 245, 136)',
                backgroundColor: 'rgba(122, 245, 136, 0.5)',
                hidden: true
            },
            {
                label: 'LGBTQ Educational Resources',
                data: lgbtqEducationalResourcesScores,
                borderColor: 'rgb(122, 245, 233)',
                backgroundColor: 'rgba(122, 245, 233, 0.5)',
                hidden: true
            },
            {
                label: 'Pro-LGBTQ Trainings for Staff',
                data: proLgbtqTrainingsForStaffScores,
                borderColor: 'rgb(122, 138, 245)',
                backgroundColor: 'rgba(122, 138, 245, 0.5)',
                hidden: true
            },
            {
                label: 'Pro-LGBTQ Trainings for Athletes',
                data: proLgbtqTrainingsForAthletesScores,
                borderColor: 'rgb(194, 122, 245)',
                backgroundColor: 'rgba(194, 122, 245, 0.5)',
                hidden: true
            },
            {
                label: 'Total Score',
                data: totalScoreScores,
                borderColor: 'rgb(245, 122, 214)',
                backgroundColor: 'rgba(245, 122, 214, 0.5)',
                hidden: false
            }
        ]
    }

    return (
        <div className='graph-container'>
            <div className='graph'>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default Linegraph