import React from 'react';
import {
  Box, Typography, TextField, Button, MenuItem, Chip, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Select, FormControl, InputLabel
} from '@mui/material';
import { Delete, Edit, AccessTime, Warning } from '@mui/icons-material';
import { format } from 'date-fns';
import Sidebar from '../Components/sideBar/sideBar';
import Appbar from '../Components/appBar/appBar';

const goals = [
  {
    project: 'QSS Website',
    data: [
      {
        title: 'The Fetched tweets from twitter part1',
        description: 'To complete the cake PHP technology page from...',
        user: 'So this is dummy repost content genrated by ai',
        time: '03/05/2025',
        status: 'To Do',
      },
      {
        title: 'The Fetched tweets from twitter part2',
        description: 'Working on clearify functionality of Chatboat...',
        user: 'So this is dummy repost content genrated by ai',
        time: '05/04/2025',
        status: 'Blocked',
      }
    ]
  }
];

export default function HistoryTable() {
  const today = format(new Date(), 'yyyy-MM-dd');

  const getPriorityColor = (priority) => {
    if (priority === 'High') return 'error';
    if (priority === 'Medium') return 'warning';
    return 'default';
  };

  return (
    <Box>
        <Sidebar/>
        <Appbar/>
         <Box sx={{ p: 3, width: '80vw', ml: '200px', mt:'80px'}}>
    
      <Typography variant="h5" fontWeight="bold">Your History</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Manage and track all your Posts.
      </Typography>

      {/* Filters */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        
        <TextField size="small" label="Search goals..." variant="outlined" />
        <TextField size="small" type="date" defaultValue={today} />
        <TextField size="small" type="date" defaultValue={today} />
        <Button variant="contained">Clear</Button>
      </Box>

      {/* Table */}
      {goals.map((group, i) => (
        <Box key={i} mb={3}>
          <Box bgcolor="#e8f0ff" p={1} borderRadius={1}>
            <Typography variant="subtitle2" fontWeight="bold">
         
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Post</TableCell>
                  <TableCell>Repost</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {group.data.map((goal, j) => (
                  <TableRow
                    key={j}
                    sx={{
                      backgroundColor:
                        new Date(goal.dueDate) < new Date() ? '#ffeaea' : 'inherit'
                    }}
                  >
                    <TableCell>
                      <Typography fontWeight="bold">{goal.title}</Typography>

                    </TableCell>
                    <TableCell>{goal.user}</TableCell>
                    <TableCell>
                      <Chip
                        label={goal.time}
                       
                        size="small"
                      />
                    </TableCell>
                   
                    <TableCell>
                      <IconButton><AccessTime /></IconButton>
                      <IconButton><Warning color="warning" /></IconButton>
                      <IconButton><Delete color="error" /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}

      {/* Add New Goal Button */}
      <Box textAlign="right" mt={2}>
        <Button variant="contained" color="primary">+ New Goal</Button>
      </Box>
    </Box>
    </Box>
   
  );
}
