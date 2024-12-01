import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Tabs value={value} onChange={handleChange}>
        <Tab label="Buyer" {...a11yProps(0)} />
        <Tab label="Supplier" {...a11yProps(1)} />
    </Tabs>
    <CustomTabPanel value={value} index={0}>
        <ul className="tabContent py-2">
            <li className="my-3">Post your requirements.</li>
            <li className="my-3">Sit back for multiple suppliers to contact you.</li>
            <li className="my-3">Choose among the suppliers based on the ratings and reviews.</li>
        </ul>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
        <ul className="tabContent py-2">
            <li className="my-3">Choose among the suppliers based on the ratings and reviews.</li>
            <li className="my-3">Post your requirements.</li>
            <li className="my-3">Sit back for multiple suppliers to contact you.</li>
        </ul>
    </CustomTabPanel>
      </>
  );
}
