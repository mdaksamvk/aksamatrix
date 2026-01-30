import React from 'react';
import { ExternalLink } from 'lucide-react';

const ResearchGatePublications = () => {
  const publications = [
    {
      title: "AI and Big Data: A Synergistic Approach to Research",
      url: "https://www.researchgate.net/publication/389163508_AI_and_Big_Data_A_synergistic_approach_to_Research",
    },
    {
      title: "Mathophobia",
      url: "https://www.researchgate.net/publication/387323124_Mathophobia",
    },
    {
      title: "Financial Data Modeling for business owners and entrepreneurs",
      url: "https://www.researchgate.net/publication/387323119_Financial_Data_Modeling_for_business_owners_and_entrepreneurs",
    },
    {
      title: "jain university - Sustainable Computing in cloud, edge and AI systems",
      url: "https://www.researchgate.net/publication/384934429_jain_university_-_Sustainable_Computing_in_cloud_edge_and_AI_systems",
    },
    {
      title: "Mathematics for decision making, optimization and scoring in Industries",
      url: "https://www.researchgate.net/publication/387322879_Mathematics_for_decision_making_optimization_and_scoring_in_Industries",
    }, {
      title: "vit chennai Building Large Language Models (LLM) Application - A Paradigm Shift in Data science",
      url: "https://www.researchgate.net/publication/380464751_vit_chennai_Building_Large_Language_Models_LLM_Application_-_A_Paradigm_Shift_in_Data_science",
    }, {
      title: "VIT-AP Kubernetes for IoT Internet of Things and mobile devices",
      url: "https://www.researchgate.net/publication/379084444_VIT-AP_Kubernetes_for_IoT_Internet_of_Things_and_mobile_devices",
    }, {
      title: "Kubeflow designed for Data science - VIT AP",
      url: "https://www.researchgate.net/publication/376313145_Kubeflow_designed_for_Data_science_-_VIT_AP",
    }, {
      title: "VIT-AP Trends and perspective on statistical data analysis",
      url: "https://www.researchgate.net/publication/370690289_VIT-AP_Trends_and_perspective_on_statistical_data_analysis",
    }, {
      title: "AI and Big Data: A synergistic approach to Research",
      url: "https://www.researchgate.net/publication/389163508_AI_and_Big_Data_A_synergistic_approach_to_Research",
    }, {
      title: "Industrial Internet of Things (IIoT) with real-time sensor data analytics using python",
      url: "https://www.researchgate.net/publication/368189888_Industrial_Internet_of_Things_IIoT_with_real-time_sensor_data_analytics_using_python",
    }, {
      title: "Building knowledge graph in TypeDB Integrations with Graph ML Frameworks (NetworkX) and its link prediction using PyTorch Geometric (PyG)",
      url: "https://www.researchgate.net/publication/365453322_Building_knowledge_graph_in_TypeDB_Integrations_with_Graph_ML_Frameworks_NetworkX_and_its_link_prediction_using_PyTorch_Geometric_PyG",
    },
    {
      title: "Data science for cyber security",
      url: "https://www.researchgate.net/publication/364322737_Data_science_for_cyber_security://www.researchgate.net/publication/387323124_Mathophobia",
    },
    {
      title: "Numerical Methods to Artificial Intelligence via Machine Learning presentation in Vellore institute of Technology (VIT)- AP",
      url: "https://www.researchgate.net/publication/359856483_Numerical_Methods_to_Artificial_Intelligence_via_Machine_Learning_presentation_in_Vellore_institute_of_Technology_VIT-_AP",
    },
    {
      title: "DATA SCIENCE JOURNEY WITH THEORETICAL PERSPECTIVE - SAEINDIA Southern Section",
      url: "https://www.researchgate.net/publication/356596724_DATA_SCIENCE_JOURNEY_WITH_THEORETICAL_PERSPECTIVE_-_SAEINDIA_Southern_Section",
    },
    {
      title: "Python to unravel cancer drug target proteins and drug resistance mechanism analysis . (Proposed for pycon2019 IIT Madras)",
      url: "https://www.researchgate.net/publication/335685267_Python_to_unravel_cancer_drug_target_proteins_and_drug_resistance_mechanism_analysis_Proposed_for_pycon2019_IIT_Madras",
    },
    {
      title: "Python tool to data analysis and Artificial intelligence",
      url: "https://www.researchgate.net/publication/328981768_Python_tool_to_data_analysis_and_Artificial_intelligence",
    },
    
    // Add more publications here
  ];

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-400">Activities</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-12 shadow-lg">
        <ul className="list-disc list-inside text-white space-y-2">
          {publications.map((pub, index) => (
            <li key={index} className="mb-2 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-blue-400" />
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline transition-colors">
                {pub.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Academic Collaborations</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Collaborative research with computational biology labs</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Cross-disciplinary projects with computer science departments</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Industry partnerships for applied data science research</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Academic Service</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Peer reviewer for scientific journals</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Conference committee member</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mt-2 mr-3"></span>
              <span>Workshop organizer for data science in bioinformatics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchGatePublications;