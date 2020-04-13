import React from "react";
import ReactDOM from "react-dom";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const r_section1 = "Regie's Section #1";
const r_section2 = "Regie's Section #2";

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>{r_section1}</Text>
      </View>
      <View style={styles.section}>
        <Text>{r_section2}</Text>
      </View>
    </Page>
  </Document>
);

export const generateReportPDF = () => {
  ReactDOM.render(<MyDocument />, `${__dirname}/example.pdf`);
};
