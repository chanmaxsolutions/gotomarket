// services/airtable.ts
interface ContactFormData {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    inquiryType: string;
    message: string;
}

export const submitToAirtable = async (formData: ContactFormData) => {
    try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            Name: formData.name,
                            Email: formData.email,
                            'Country Code': formData.countryCode,
                            'Phone Number': formData.phoneNumber,
                            'Inquiry Type': formData.inquiryType,
                            Message: formData.message,
                            Date: new Date().toISOString()
                        }
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'SUBMISSION_FAILED');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting to Airtable:', error);
        throw error;
    }
};