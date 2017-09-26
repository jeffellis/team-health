const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const PerspectiveSchema = new mongoose.Schema(
	{
		title: {
			required: true,
			trim: true,
			type: String
        },
        icon: {
            trim: true,
            type: String
        },
		green: {
            required: true,
            trim: true,
            type: String
        },    
		yellow: {
            required: true,
            trim: true,
            type: String
        },    
		red: {
            required: true,
            trim: true,
            type: String
        }    
	},
    { minimize: false }    
);

PerspectiveSchema.plugin(timestamps);
PerspectiveSchema.plugin(mongooseStringQuery);

const Perspective = mongoose.model('Perspective', PerspectiveSchema);
module.exports = Perspective;    