import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';
import axios from 'axios';

import Menu, { MenuItem } from 'material-ui/Menu';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
//import Switch from 'material-ui/Switch';
