import { ReportHandler } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (!onPerfEntry || typeof onPerfEntry !== 'function') {
    return;
  }

  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
};

export default reportWebVitals;
