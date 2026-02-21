import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.min(0).required(),
    }),

    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'sellersNote',
      title: "Seller's Note",
      type: 'text',
    }),

    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          name: 'spec',
          title: 'Specification',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Example: Weight, Material, Power, Capacity',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Example: 2kg, Stainless Steel, 220V',
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'contactName',
          title: 'Contact Person / Company',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp Number',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'AVAILABLE'},
          {title: 'Low Stock', value: 'LOW_STOCK'},
          {title: 'Out of Stock', value: 'OUT_OF_STOCK'},
        ],
      },
      initialValue: 'AVAILABLE',
    }),

    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'images.0',
    },
  },
})
