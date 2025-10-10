// src/profile/CurriculumPDF.tsx
import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font, Link } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import programmingLanguageJSON from "../information/programmingLanguages.json";
import dataBasesJSON from "../information/databases.json";
import frameworksJSON from "../information/frameworks.json";
import developmentBoardsJSON from "../information/developmentboards.json";
import professionalNetworksJSON from "../information/professionalnetworks.json";

Font.registerHyphenationCallback(word => [word]);

// Estilos mejorados para aprovechar toda la hoja y evitar cortes de palabras
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 24,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    wordBreak: "keep-all"
  },
  leftColumn: {
    width: "33%",
    paddingRight: 18,
    backgroundColor: "#f7f7fa",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "2px solid #f7f7fa"
  },
  rightColumn: {
    width: "65%",
    paddingLeft: 24,
    minHeight: "100%",
    marginLeft: "1%",
    marginRight: "1%"
  },
  section: { marginBottom: 4 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, color: "#2c3e50", textAlign: "center", lineHeight: 1.15 },
  subtitle: { fontSize: 14, fontWeight: "bold", marginBottom: 6, color: "#6366f1" },
  text: { marginBottom: 0, color: "#222" },
  link: { color: "#6366f1", textDecoration: "underline", wordBreak: "break-all", width: '100%' },
  list: { marginLeft: 10, marginBottom: 4 },
  listItem: { marginBottom: 2, whiteSpace: "pre" },
  label: { fontWeight: "bold", color: "#6366f1" },
  small: { fontSize: 10, color: "#666" },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 3
  },
  chip: {
    backgroundColor: "#e0e7ff",
    color: "#3730a3",
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 10,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 0,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  elementList: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
  }
});

const CurriculumPDF: React.FC = () => {
  const { t } = useTranslation();

  // Datos personales
  const name = t("profile.presentation.name");
  const biography = t("profile.presentation.biography");
  const career = t("profile.presentation.career");
  const phoneLabel = t("profile.presentation.personalData.phoneLabel");
  const phone = t("profile.presentation.personalData.phone");
  const emailLabel = t("profile.presentation.personalData.emailLabel");
  const email = t("profile.presentation.personalData.email");
  const websiteLabel = t("profile.presentation.personalData.websiteLabel");
  const website = t("profile.presentation.personalData.website");

  // Conocimientos técnicos
  const technicalKnowledge = t("profile.technicalknowledge.title");
  const programmingLanguages = t("profile.technicalknowledge.programmingLanguages.title");
  const frameworks = t("profile.technicalknowledge.frameworks.title");
  const databases = t("profile.technicalknowledge.databases.title");
  const developmentBoards = t("profile.technicalknowledge.developmentBoards.title");

  //Aptitudes y habilidades blandas
  const softSkillsTitle = t("profile.softSkills.title");
  const softSkills = t("profile.softSkills.list", { returnObjects: true }) as Array<{ title: string , description: string }>;

  //Referencias
  const titleReferences = t("profile.references.title");
  const references = t("profile.references.list", { returnObjects: true }) as
    Array<{ name: string; career: string; jobTitle: string; company: string; email?: string; phone?: string }>;

  // Formación académica
  const academicFormationTitle = t("profile.academicBackground.title");
  const academicFormation = t("profile.academicBackground.titles", { returnObjects: true }) as Array<{ degree: string; institution: string; year: string }>;

  // Certificados
  const certificatesTitle = t("profile.certificates.title");
  const certificates = t("profile.certificates.courses", { returnObjects: true }) as Record<string, any>;

  // Redes profesionales
  const networksTitle = t("profile.professionalnetworks.title");

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Columna izquierda: datos personales, certificados, redes */}
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.small}>{career}</Text>
            <View style={styles.list}>
              <View style={{ marginBottom: 6 }}>
                <Text style={styles.label}>{phoneLabel}</Text>
                <Text style={styles.small}>{phone}</Text>
              </View>
              <View style={{ marginBottom: 6 }}>
                <Text style={styles.label}>{emailLabel}</Text>
                <Link style={styles.small} src={`mailto:${email}`}>{email}</Link>
              </View>
              <View style={{ marginBottom: 6 }}>
                <Text style={styles.label}>{websiteLabel}</Text>
                <Link style={styles.small} src={website}>{website}</Link>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>{academicFormationTitle}</Text>
            <View style={styles.list}>
              {academicFormation.map((item, idx) => (
                <View key={idx} style={{ marginBottom: 6 }}>
                  <Text style={styles.label}>{item.degree}</Text>
                  <Text style={styles.small}>{item.institution} - {item.year}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>{certificatesTitle}</Text>
            <View style={styles.list}>
              {Object.values(certificates).map((cert: any, idx) => (
                <View key={idx} style={{ marginBottom: 6 }}>
                  <Text style={styles.label}>{cert.title}</Text>
                  <Text style={styles.small}>{cert.institute}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={[styles.section, { marginBottom: 0 }]}>
            <Text style={styles.subtitle}>{networksTitle}</Text>
            <View style={styles.list} >
              {professionalNetworksJSON.map((network) => (
                <Text style={styles.text}>
                  {network.name}:
                  <Link src={network.url}>
                    {t("profile.professionalnetworks.viewNetwork")}
                  </Link>
                </Text>
              ))}
            </View>
          </View>
        </View>
        {/* Columna derecha: biografía, conocimientos, tecnologías, referencias */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={styles.subtitle}>{t("profile.presentation.title")}</Text>
            <Text style={styles.text}>{biography}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>{softSkillsTitle}</Text>
            <View style={styles.list}>
              {softSkills.map((skill, idx) => (
                <Text key={idx} style={styles.listItem}>
                  <Text style={{ fontWeight: 'bold' }}>• {skill.title}</Text>: {skill.description}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>{technicalKnowledge}</Text>
            <Text style={styles.text}>• {programmingLanguages}</Text>
            <View style={styles.chipContainer}>
              {programmingLanguageJSON.map((tech, idx) => (
                <Text key={idx} style={styles.chip}>{tech.name}</Text>
              ))}
            </View>
            <Text style={styles.text}>• {frameworks}</Text>
            <View style={styles.chipContainer}>
              {frameworksJSON.map((tech, idx) => (
                <Text key={idx} style={styles.chip}>{tech.name}</Text>
              ))}
            </View>
            <Text style={styles.text}>• {databases}</Text>
            <View style={styles.chipContainer}>
              {dataBasesJSON.map((tech, idx) => (
                <Text key={idx} style={styles.chip}>{tech.name}</Text>
              ))}
            </View>
            <Text style={styles.text}>• {developmentBoards}</Text>
            <View style={styles.chipContainer}>
              {developmentBoardsJSON.map((tech, idx) => (
                <Text key={idx} style={styles.chip}>{tech.name}</Text>
              ))}
            </View>
          </View>
          {/* Referncias */}
          <View style={[styles.section, { marginBottom: 0 }]}>
            <Text style={styles.subtitle}>{titleReferences}</Text>
            <View style={styles.list}>
              {references.map((item, idx) => (
                <View key={idx} style={[styles.elementList, idx === references.length - 1 ? { marginBottom: 0 } : {}]}>
                  <Text style={styles.listItem}>{item.name} - {item.career}</Text>
                  <Text style={[styles.listItem, {marginLeft: 10}]}>{item.jobTitle}</Text>
                  <Text style={[styles.listItem, {marginLeft: 10}]}>{item.company}</Text>
                  <Text style={[styles.listItem, {marginLeft: 10}]}>{item.email}</Text>
                  <Text style={[styles.listItem, {marginLeft: 10}]}>{item.phone}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Componente para mostrar el botón de descarga
export const CurriculumPDFDownload: React.FC = () => {
  return (
    <PDFDownloadLink document={<CurriculumPDF />} fileName="Curriculum_AndrewLopezHerrera.pdf" />
  );
};

export default CurriculumPDF;