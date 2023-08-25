import Migration from 'contentful-migration'

/* BEGA-8016
 * - add article number and tab type to meta link
 */

module.exports = function (migration: Migration) {
    const metaLink = migration.editContentType('pageGeneric')

    metaLink
        .createField('articleNumber')
        .name('Article Number')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
}
