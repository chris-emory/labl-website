export interface Publication {
  authors: string;
  year: string;
  title: string;
  link?: string;
  linkLabel?: string;
}

export const publicationsData: Record<"prep" | "refereed", Publication[]> = {
  prep: [
    {
      authors: "Rezaii, N., Quimby, M., Hochberg, D., Brickhouse, M., Touroutoglou, A., Dickerson, B., & Wolff, P.",
      year: "2023",
      title: "How a New Model of the Language Network might Improve Classification of Primary Progressive Aphasia: Insights from Artificial Intelligence. Manuscript ready for review.",
    },
    {
      authors: "Robertson, C., Rezaii, N., Quimby, M., Hochberg, D., Wolff, P., & Dickerson, B.",
      year: "2023",
      title: "Using explainable artificial intelligence to identify linguistic biomarkers of amyloid pathology in primary progressive aphasia. Manuscript ready for review.",
    },
    {
      authors: "Wanan, C. M J., Nelson, B., Addington, J., Allott, K., Baker, J. T., Bouix, S., Cecci, G., Clark, S. R., Corcoran, C. M., Harms, M. P., Kapur, T., Lewandowski, K. E., Mathalon, D. H., Pasternak, O., Perkins, D. O., Stone, W. S., Torous, J., Wolff, P., Yung, A. R., Anticevic. A….S. W. Woods, M. E. Shenton, and the Accelerating Medicines Partnership Schizophrenia.",
      year: "2023",
      title: "Accelerating Medicines Partnership® Schizophrenia (AMP® SCZ): Rationale and Study Design of the Largest Global Prospective Cohort Study of Clinical High Risk for Psychosis. Manuscript ready for review.",
    },
    {
      authors: "Bilgrami, Z., R., Ennis, M., Corcoran, C. M., Cecci, G., Castro, E., Fadnavis, S. S., Nelson, B., Baker, J. T., & Wolff, P.",
      year: "in preparation",
      title: "Collection and processing of linguistic biomarkers of psychosis. Manuscript in preparation.",
    },
    {
      authors: "Bilgrami, Z. R., Walker, E., & Wolff, P.",
      year: "in preparation",
      title: "Using large language models to understand thought disorder and predict psychosis. Manuscript in preparation.",
    },
    {
      authors: "Linying L., Craighead, E., & Wolff, P.",
      year: "in preparation",
      title: "Language as a subtyping tool and a potential predictor of treatment outcome in depression. Manuscript in preparation.",
    },
  ],

  refereed: [
    {
      authors: "Rezaii, N., Hochberg, D., Quimby, M., Wong, B., Brickhouse, M., Touroutoglou, A., … & Wolff, P.",
      year: "2024",
      title: "Artificial intelligence classifies primary progressive aphasia from connected speech. Brain, awae196.",
      link: "https://doi.org/10.1093/brain/awae196",
      linkLabel: "More",
    },
    {
      authors: "Wannan, C. M., Nelson, B., Addington, J., Allott, K., Anticevic, A., Arango, C., … & Zoupou, E.",
      year: "2024",
      title: "Accelerating medicines partnership® Schizophrenia (AMP® SCZ): Rationale and study design of the largest global prospective cohort study of clinical high risk for psychosis. Schizophrenia Bulletin, 50(3), 496-512.",
      link: "https://doi.org/10.1093/schbul/sbae011",
      linkLabel: "More",
    },
    {
      authors: "Rezaii, N., Wolff, P., Price, B. H.",
      year: "2022",
      title: "Natural Language Processing in Psychiatry: The Promises and Perils of a Transformative Approach. British Journal of Psychiatry.",
      link: "doi.org/10.1192/bjp.2021.188",
      linkLabel: "More",
    },
    {
      authors: "Shi, H., & Wolff, P.",
      year: "2021",
      title: "What Transformers Might Know About the Physical World: T5 and the Origins of Knowledge. Proceedings of the Annual Meeting of the Cognitive Science Society, 43.",
      link: "https://escholarship.org/uc/item/0kr3t179",
      linkLabel: "More",
    },
    {
      authors: "Corcoran, C.M., Mittal, V.A., Bearden, C.E., Gur, R., Hitczenko, K., Bilgrami, Z., Savic, A., Cecchi, G.A., & Wolff, P.",
      year: "2020",
      title: "Language as a biomarker for Psychosis: A natural language processing approach. Schizophrenia Research.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2019",
      title: "Using big data to understand memory and future thinking. Proceedings of the 41th Annual Conference of the Cognitive Science Society (pp. 1-6). Montreal, Canada.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2019",
      title: "Predicting future mental illness from social media: A big data approach. Behavior Research Methods.",
    },
    {
      authors: "Rezaii, N., Walker, E., & Wolff, P.",
      year: "2019",
      title: "A machine learning approach to predicting psychosis using semantic density and latent content analysis. npj Shizophrenia - Nature.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2018",
      title: "A big data analysis of the relationship between future thinking and decision-making. PNAS, 115 (8), E1740 – 1748.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2018",
      title: "Using big data methods to identify conceptual frameworks. Proceedings of the 40th Annual Conference of the Cognitive Science Society (pp. 1-6). Philadelphia, USA.",
    },
    {
      authors: "Wolff, P. & Thorstand, R.",
      year: "2016",
      title: " Force dynamics. In M. Waldman (Ed.) Oxford Handbook of Causal Reasoning. Oxford, UK: Oxford University Press.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2016",
      title: "What causal illusions might tell us about the identification of causes. Proceedings of the 38th Annual Conference of the Cognitive Science Society. Philadelphia, USA.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2024",
      title: "Artificial intelligence classifies primary progressive aphasia from connected speech. Brain, awae196.",
    },
    {
      authors: "Thorstad, R., & Wolff, P.",
      year: "2016",
      title: "Temporal horizons and decision-making: A big data approach. Proceedings of the 38th Annual Conference of the Cognitive Science Society. Philadelphia, USA.",
    },
    {
      authors: "Copley, Bridget, Phillip Wolff & Jason Shepard.",
      year: "2015",
      title: "Force interaction in the expression of causation. In Sarah D'Antonio, Mary Moroney & Carol Rose Little (eds.), Proceedings of the 25th Semantics and Linguistic Theory Conference, 433-451.",
    },
    {
      authors: "Wolff, P.",
      year: "2015",
      title: "Ten Lectures on Experimental Cognitive Semantics and the language-thought interface by Phillip Wolff (with DVD), Thomas Fuyin Li, Yan Ding (Eds.), Beijing: Foreign Language Teaching and Research Press.",
    },
    {
      authors: "Wolff, P., & Barbey, A. K.",
      year: "2015",
      title: "Causal reasoning with forces. Frontiers in Human Neuroscience, 9.",
    },
    {
      authors: " Li, D., Du, J., & Wolff, P.",
      year: "2015",
      title: "The linguistic representations of causing events and caused events in narrative discourse. Cognitive Semantics, 1.",
    },
    {
      authors: "Thorstad, R., Nie, A., & Wolff, P.",
      year: "2015",
      title: "How representations of time can affect willingness to wait for future rewards. Proceedings of the 37th Annual Conference of the Cognitive Science Society. Pasadena, CA.",
    },
    {
      authors: "Nie, A., Shepard, J., Choi, J. Copley, B., & Wolf, P.",
      year: "2015",
      title: "Computational exploration of the Linguistic Structures of Future-oriented Expression: Classification and Categorization NAACL-HLT 2015, Denver, Colorado.",
    },
    {
      authors: "Copley, B. & Wolff, P.",
      year: "2014",
      title: "Theories of causation can and should inform linguistic theory. In. B. Copley, F. Martin, & N. Duffield (Eds.), Forces in Grammatical Structures. Forces in grammatical structures: Causation between linguistics and philosophy.",
    },
  ],
};
