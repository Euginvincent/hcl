import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    IconButton,
} from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';

const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const timeSlots = [
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM',
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM'
];

const AttendancePage: React.FC = () => (
    <Box p={3}>
        <Typography variant="h5" gutterBottom>Attendance Page</Typography>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Time/Day</TableCell>
                        {days.map(day => (
                            <TableCell key={day} align="center">{day}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timeSlots.map(time => (
                        <TableRow key={time}>
                            <TableCell>{time}</TableCell>
                            {days.map(day => (
                                <TableCell key={day + time} align="center">
                                    <IconButton aria-label={`View ${day} ${time}`}>
                                        {/* <VisibilityIcon /> */}
                                    </IconButton>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);

export default AttendancePage;