// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// // import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';

// const styles = theme => ({
//     root: {
//         ...theme.mixins.gutters(),
//         paddingTop: theme.spacing.unit * 2,
//         paddingBottom: theme.spacing.unit * 2,
//         paddingSide: theme.spacing.unit * 4,
//         width: '100%',
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//         paddingLeft: theme.spacing.unit * 4,
//     },
   
// });

// function ReviewPage(props) {

//     class NestedList extends React.Component {
//         state = {
//             open: true,
//         };

//         handleClick = () => {
//             this.setState(state => ({ open: !state.open }));
//         };
//     }
 
    
    

//         // const { classes } = props;
//         return (
//             <div>
                
//                 <Paper elevation={4}>
//                     <List
//                         component="nav"
//                         subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
//                         // className={classes.root}
//                     >
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <SendIcon />
//                             </ListItemIcon>
//                             <ListItemText inset primary="Sent mail" />
//                         </ListItem>
//                         <ListItem button>
//                             <ListItemIcon>
                             
//                             </ListItemIcon>
//                             <ListItemText inset primary="Drafts" />
//                         </ListItem>
//                         <ListItem button onClick={this.handleClick}>
//                             <ListItemIcon>
//                                 <InboxIcon />
//                             </ListItemIcon>
//                             <ListItemText inset primary="Inbox" />
//                             {this.state.open ? <ExpandLess /> : <ExpandMore />}
//                         </ListItem>
//                         <Collapse in={this.state.open} timeout="auto" unmountOnExit>
//                             <List component="div" disablePadding>
//                                 <ListItem button>
//                                     <ListItemIcon>
//                                         <StarBorder />
//                                     </ListItemIcon>
//                                     <ListItemText inset primary="Starred" />
//                                 </ListItem>
//                             </List>
//                         </Collapse>
//                     </List>
//     );
//                   }
//                 }
//                 </Paper>
//             </div>
//         );
//             }
       



// ReviewPage.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ReviewPage);