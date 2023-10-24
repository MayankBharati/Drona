import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface company {
    id: number
    url: string
    tag: string
    company: string
    role: string
    logo: string
    isApproved: boolean
}

export default function ConfirmedOpportunity() {
    const [opportunity, setOpportunity] = useState<company[]>([])

    useEffect(() => {
        try {
            axios.get(`http://localhost:8080/api/opportunity`).then(function (response) {
                setOpportunity(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    })

    let ConfirmedOpportunities: company[] = []
    for (let i = 0; i < opportunity.length; i++) {
        if (opportunity[i].isApproved == true) {
            ConfirmedOpportunities.push(opportunity[i])
        }
    }

    return ConfirmedOpportunities
}
