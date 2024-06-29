import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="faq" className="container mx-auto py-12 flex flex-col items-center" aria-label="Frequently Asked Questions Section">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide text-white my-10 lg:my-20">
        {t('faq.title')}
      </h2>
      <Box className="w-full">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className="bg-neutral-900 text-white mb-4"
          aria-labelledby="panel1d-header"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-black" />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="bg-neutral-900 text-white mb-4 text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
          >
            <Typography component="h3" variant="subtitle2" className="text-xl">
              {t('faq.questions.0.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-neutral-900" aria-labelledby="panel1d-header">
            <Typography
              variant="body2"
              gutterBottom
              className="text-md text-neutral-500"
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {t('faq.questions.0.answer')} <Link className="text-orange-500" href="mailto:support@email.com"> support@email.com </Link>.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className="bg-neutral-900 text-white mb-4 text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
          aria-labelledby="panel2d-header"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-black" />}
            aria-controls="panel2d-content"
            id="panel2d-header"
            className="bg-neutral-900 text-white mb-4 text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
          >
            <Typography component="h3" variant="subtitle2" className="text-xl">
              {t('faq.questions.1.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-neutral-900" aria-labelledby="panel2d-header">
            <Typography
              variant="body2"
              gutterBottom
              className="text-md text-neutral-500"
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {t('faq.questions.1.answer')}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className="bg-neutral-900 text-white mb-4"
          aria-labelledby="panel3d-header"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-black" />}
            aria-controls="panel3d-content"
            id="panel3d-header"
            className="bg-neutral-900 text-white mb-4 text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
          >
            <Typography component="h3" variant="subtitle2" className="text-xl">
              {t('faq.questions.2.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-neutral-900" aria-labelledby="panel3d-header">
            <Typography
              variant="body2"
              gutterBottom
              className="text-md text-neutral-500"
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {t('faq.questions.2.answer')}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          className="bg-neutral-900 text-white mb-4"
          aria-labelledby="panel4d-header"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-black" />}
            aria-controls="panel4d-content"
            id="panel4d-header"
            className="bg-neutral-900 text-white mb-4 text-xl hover:bg-orange-700 border border-orange-900 rounded-lg transition duration-200"
          >
            <Typography component="h3" variant="subtitle2" className="text-xl">
              {t('faq.questions.3.question')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-neutral-900" aria-labelledby="panel4d-header">
            <Typography
              variant="body2"
              gutterBottom
              className="text-md text-neutral-500"
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {t('faq.questions.3.answer')}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
