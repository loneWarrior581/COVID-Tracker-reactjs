import React from 'react'
import { Card,CardContent,Typography} from '@material-ui/core'
import './InfoBox.css'

function InfoBox({title,active,cases,total,...props}) {
    return (
        <Card onClick={props.onClick} className="InfoBox">
            <CardContent>
                {/* title i.e the Corona virus cases */}
                <Typography className="InfoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="InfoBox__cases">
                    {cases}
                </h2>
                <Typography className="InfoBox__total" color="textSecondary">
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
https://youtu.be/cF3pIMJUZxM?t=14644