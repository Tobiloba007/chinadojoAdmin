import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'rateInformation',
  title: 'Rate Information',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'rateOptions',
          title: 'Rate Options',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'type',
                title: 'Type',
                type: 'string',
              },
              {
                name: 'rate',
                title: 'Rate',
                type: 'string',
              },
              {
                name: 'clearingFee',
                title: 'Clearing Fee',
                type: 'string',
              },
              {
                name: 'duration',
                title: 'Duration',
                type: 'string',
              },
            ],
          }],
        },
      ],
    },
  ],
})