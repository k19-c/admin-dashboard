import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export const candidates=[
    { avatar: 'C', name: 'Chegu Manideep', designation: 'Python', color: deepOrange[500] },
    { avatar: 'H', name: 'Harsha', designation: 'Java', color: deepPurple[500] },
    { avatar: 'A', name: "Anand", designation: 'AWS', color: deepOrange[500] },
    { avatar: 'N', name: "Nandish", designation: 'Devops', color: deepPurple[500] },
    { avatar: 'C', name: "Challa", designation: 'Tester', color: deepOrange[500] },
    { avatar: 'D', name: "David", designation: 'Salaesforce', color: deepPurple[500] },
    { avatar: 'R', name: "Rahul", designation: 'React', color: deepOrange[500] },


    // Add more candidates as needed
];

const Candidate=() => {
    return (
        <div className="candidate">
            <Stack direction="column" spacing={2}>
                {candidates.map((candidate, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: candidate.color }}>{candidate.avatar}</Avatar>
                        <div style={{ marginLeft: '10px' }}>
                            <div>{candidate.name}</div>
                            <div>{candidate.designation}</div>
                        </div>
                    </div>
                ))}
            </Stack>
        </div>
    );
};

export default Candidate;
