'use client';  // Marking this file as a client-side component

import { useState } from 'react';

const ngosData = [
  {
    ngoName: 'Helping Hands Foundation',
    ownerPhone: '9876543210',
    staffPhone: '9123456789',
    city: 'Patna',
    location: 'MG Road, Civil Lines',
    pincode: '800001',
    email: 'contact@helpinghands.org',
    address: '123 MG Road, Civil Lines',
    state: 'Bihar',
  },
  {
    ngoName: 'Bright Future Trust',
    ownerPhone: '9988776655',
    staffPhone: '8877665544',
    city: 'Patna',
    location: 'Boring Canal Road',
    pincode: '800014',
    email: 'info@brightfuture.org',
    address: '456 Boring Canal Road',
    state: 'Bihar',
  },
  {
    ngoName: 'Sahara Welfare Society',
    ownerPhone: '9900990099',
    staffPhone: '8800880088',
    city: 'Patna',
    location: 'Near Gandhi Maidan, Fraser Road',
    pincode: '800001',
    email: 'support@sahara.org',
    address: 'Near Gandhi Maidan, Fraser Road',
    state: 'Bihar',
  },
  {
    ngoName: 'Nayi Disha NGO',
    ownerPhone: '9112233445',
    staffPhone: '9334455667',
    city: 'Patna',
    location: 'Kankarbagh Main Road',
    pincode: '800020',
    email: 'hello@nayidisha.org',
    address: '789 Kankarbagh Main Road',
    state: 'Bihar',
  },
];

export default function NGOPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>NGO List</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>NGO Name</th>
            <th style={styles.tableHeader}>Owner Phone</th>
            <th style={styles.tableHeader}>Staff Phone</th>
            <th style={styles.tableHeader}>City</th>
            <th style={styles.tableHeader}>Location</th>
            <th style={styles.tableHeader}>Pincode</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Address</th>
            <th style={styles.tableHeader}>State</th>
          </tr>
        </thead>
        <tbody>
          {ngosData.map((ngo, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{ngo.ngoName}</td>
              <td style={styles.tableCell}>{ngo.ownerPhone}</td>
              <td style={styles.tableCell}>{ngo.staffPhone}</td>
              <td style={styles.tableCell}>{ngo.city}</td>
              <td style={styles.tableCell}>{ngo.location}</td>
              <td style={styles.tableCell}>{ngo.pincode}</td>
              <td style={styles.tableCell}>{ngo.email}</td>
              <td style={styles.tableCell}>{ngo.address}</td>
              <td style={styles.tableCell}>{ngo.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#FFDD00',
    fontSize: '36px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  tableRow: {
    borderBottom: '1px solid #333',
  },
  tableHeader: {
    padding: '12px',
    textAlign: 'center',
    backgroundColor: '#FFDD00',
    color: '#000000',
    fontSize: '16px',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #333',
    fontSize: '14px',
  },
};
