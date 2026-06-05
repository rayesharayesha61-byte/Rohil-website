import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Icon } from "@iconify/react";
import colors from "../Colors";

export default function WebDevelopment() {
  const techSections = [
    {
      title: "Frontend Technologies",
      description:
        "Rohil Technologies leverages the latest frontend frameworks and languages to build highly interactive, visually appealing, and responsive user interfaces that deliver seamless user experiences across all devices. Our team focuses on creating maintainable, scalable, and fast-loading applications that meet modern web standards and keep your business ahead in digital innovation.",
      items: [
        {
          title: "HTML5",
          icon: "mdi:language-html5",
          text: "The backbone of web structure, enabling content creation and structuring web pages.",
        },
        {
          title: "CSS3",
          icon: "mdi:language-css3",
          text: "Styling your web pages with layouts, animations, and visually engaging designs.",
        },
        {
          title: "JavaScript",
          icon: "mdi:language-javascript",
          text: "Adding interactivity and dynamic behavior to your websites and applications.",
        },
        {
          title: "React.js",
          icon: "mdi:react",
          text: "Build scalable and fast user interfaces with this modern JavaScript library.",
        },
        {
          title: "Angular",
          icon: "mdi:angular",
          text: "Develop dynamic single-page applications with Google's popular framework.",
        },
        {
          title: "Vue.js",
          icon: "mdi:vuejs",
          text: "A progressive framework for building user interfaces with ease.",
        },
      ],
    },
    {
      title: "Backend Technologies",
      description:
        "Rohil Technologies provides robust backend solutions that power scalable and secure applications. Our expertise in modern server-side frameworks, APIs, and databases ensures reliable data management, fast performance, and smooth integration with frontend systems, enabling businesses to deliver efficient services and maintain high operational standards.",
      items: [
        {
          title: "Laravel PHP",
          icon: "mdi:language-php",
          text: "Laravel simplifies routing, validation, storage, caching, and queueing for PHP apps.",
        },
        {
          title: "Node.js",
          icon: "mdi:nodejs",
          text: "A runtime to build scalable backend applications using JavaScript.",
        },
        {
          title: "Python",
          icon: "mdi:language-python",
          text: "Python is ideal for web apps with Django or Flask frameworks.",
        },
      ],
    },
    {
      title: "Database Technologies",
      description:
        "Rohil Technologies designs data architectures that optimize storage, retrieval, and management. We integrate relational and NoSQL databases to handle structured and unstructured data effectively, ensuring scalability, high availability, and fast data access for critical business applications.",
      items: [
        {
          title: "MySQL",
          icon: "mdi:database",
          text: "An open-source relational database for structured data storage.",
        },
        {
          title: "MongoDB",
          icon: "mdi:database",
          text: "A flexible NoSQL database for storing unstructured or JSON-like data.",
        },
        {
          title: "NoSQL",
          icon: "mdi:database-outline",
          text: "A schema-less database approach for high scalability and flexibility.",
        },
      ],
    },
    {
      title: "Cloud Technologies",
      description:
        "Rohil Technologies provides cloud solutions to scale applications globally, improve performance, and ensure data security. Leveraging platforms like AWS, Azure, and Google Cloud, we deliver reliable, cost-efficient, and fully managed cloud infrastructures that support enterprise-grade applications.",
      items: [
        {
          title: "AWS",
          icon: "mdi:aws",
          text: "Reliable cloud hosting that scales based on your needs.",
        },
        {
          title: "Google Cloud",
          icon: "mdi:google-cloud",
          text: "Secure cloud solutions with global infrastructure.",
        },
        {
          title: "Microsoft Azure",
          icon: "mdi:azure",
          text: "Comprehensive cloud platform with PaaS, SaaS, and IaaS services.",
        },
      ],
    },
  ];

  const webSolutions = [
    {
      title: "Admin Panels",
      icon: "mdi:monitor-dashboard",
      text: "Create data-rich, visually appealing admin panels to make workflows smoother and manage projects efficiently.",
    },
    {
      title: "Communication Apps",
      icon: "mdi:message-text-outline",
      text: "Simplify communication with apps like chat, mail, ticketing, helpdesk, and CRM solutions.",
    },
    {
      title: "Social Media Apps",
      icon: "mdi:account-group-outline",
      text: "Build social media applications to establish strong business models.",
    },
    {
      title: "Map & Geo Apps",
      icon: "mdi:map-marker-radius",
      text: "Develop web & mobile apps with geo-tracking and map features.",
    },
    {
      title: "Dashboard Apps",
      icon: "mdi:view-dashboard-outline",
      text: "Powerful, customizable, and visually appealing user dashboards to enhance UX.",
    },
    {
      title: "Ecommerce Websites",
      icon: "mdi:cart-outline",
      text: "Develop retail and B2B e-commerce websites with optimized catalog business sites.",
    },
    {
      title: "Product Configurators",
      icon: "mdi:cog-outline",
      text: "Create product configurator apps to help buyers make decisions and increase conversions.",
    },
    {
      title: "Calculator Apps",
      icon: "mdi:calculator",
      text: "Build calculators for savings, CO2 emissions, ROI, and other business metrics.",
    },
    {
      title: "Landing Pages",
      icon: "mdi:web",
      text: "Combine marketing automation tools with lead capture and landing pages.",
    },
  ];

  const whatWeDeliver = [
    {
      title: "Full Stack Development",
      icon: "mdi:code-tags",
      text: "End-to-end development covering frontend and backend using latest technologies.",
    },
    {
      title: "UI / UX Development",
      icon: "mdi:account-circle-outline",
      text: "Create intuitive, engaging, and aesthetically pleasing user interfaces and experiences.",
    },
    {
      title: "Mobile Application Development",
      icon: "mdi:cellphone-iphone",
      text: "Custom mobile applications designed to be user-friendly, secure, and reliable.",
    },
  ];

  const quality = [
    {
      title: "Top Notch Quality",
      icon: "mdi:star-outline",
      text: "Experienced specialists ensuring highest quality standards in every project.",
    },
    {
      title: "Consultancy",
      icon: "mdi:account-tie",
      text: "Expert consultation to help create the best possible applications.",
    },
    {
      title: "Smooth Communication",
      icon: "mdi:chat-processing-outline",
      text: "Effective communication across time zones to support project success.",
    },
    {
      title: "Flexibility",
      icon: "mdi:gesture-tap-hold",
      text: "Agile processes allowing adaptability while still meeting deadlines.",
    },
    {
      title: "Objective Oriented",
      icon: "mdi:target",
      text: "Commitment to achieving your business goals with precise focus.",
    },
    {
      title: "Transparency",
      icon: "mdi:eye-outline",
      text: "Open and honest communication to build trust and long-term relationships.",
    },
  ];

  const renderSection = (title, items, description) => (
    <Box key={title} sx={{ py: 6 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: colors.darkBlue,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{
            textAlign: "center",
            color: colors.grey,
            maxWidth: 800,
            mx: "auto",
            mb: 4,
          }}
        >
          {description}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {items.map((item) => (
          <Box
            key={item.title}
            sx={{
              flex: "1 1 250px",
              maxWidth: "300px",
              p: 3,
              borderRadius: 3,
              boxShadow: 3,
              textAlign: "center",
              transition: "all 0.3s",
              "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
            }}
          >
            <Icon
              icon={item.icon}
              width={50}
              height={50}
              color={colors.primary}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: colors.darkBlue, mt: 2, mb: 1 }}
            >
              {item.title}
            </Typography>
            <Typography sx={{ color: colors.grey }}>{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <div>
      {/* Hero Banner */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/images/webdev.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "250px", md: "400px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Web Solutions & Development
          </Typography>
        </Box>
        <Box
          sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.5)" }}
        />
      </Box>

      {/* Sections with descriptions */}
      <Container>
        {techSections.map((section) =>
          renderSection(section.title, section.items, section.description)
        )}
      </Container>
      <Container>
        {renderSection(
          "Web Solutions We Build",
          webSolutions,
          "Rohil Technologies develops versatile web applications and digital solutions, delivering customized software that meets diverse business needs. Our expertise spans admin panels, e-commerce, dashboards, and communication apps, providing innovative solutions with seamless performance, modern design, and business-oriented functionality."
        )}
      </Container>
      <Container>
        {renderSection(
          "What We Deliver",
          whatWeDeliver,
          "Rohil Technologies delivers end-to-end software solutions from concept to deployment. We specialize in full-stack development, mobile applications, and intuitive UI/UX design, ensuring robust, secure, and scalable products that empower businesses and provide measurable impact in digital growth."
        )}
      </Container>
      <Container>
        {renderSection(
          "Why we’re the best fit for you",
          quality,
          "Rohil Technologies combines experience, quality, and commitment to provide exceptional software solutions. With top-notch specialists, flexible methodologies, smooth communication, consultancy, and transparency, we ensure your business goals are achieved efficiently while building trust and long-term value."
        )}
      </Container>
    </div>
  );
}
