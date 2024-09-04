// // controllers/partnerController.js
// const { getRepository } = require('typeorm');
// const { PartnerSchema, SkillsSchema } = require('../entities/partner/partnerDetail/PartnerDetail.js');

// // Controller function to create a partner with skills
// exports.createPartnerWithSkills = async (req, res) => {
//   const { partnerData, skillIds } = req.body;

//   try {
//     // Get repositories for Partner and Skills
//     const partnerRepository = getRepository(PartnerSchema);
//     const skillsRepository = getRepository(SkillsSchema);

//     // Find the skills based on the provided skill IDs
//     const skills = await skillsRepository.findByIds(skillIds);

//     if (skills.length !== skillIds.length) {
//       return res.status(404).json({ error: 'Some skills not found' });
//     }

//     // Create the partner and associate the skills
//     const newPartner = partnerRepository.create({
//       ...partnerData,
//       skills: skills,  // Associate the skills
//     });

//     // Save the partner along with the skills
//     const savedPartner = await partnerRepository.save(newPartner);

//     res.status(201).json({ message: 'Partner created successfully', partner: savedPartner });
//   } catch (error) {
//     console.error('Error creating partner with skills:', error);
//     res.status(500).json({ error: error.message });
//   }
// };


// const { getRepository } = require('typeorm');
// const { PartnerSchema } = require('../entities/partner/partnerDetail/PartnerDetail.js');

// exports.getPartnerWithSkills = async (req, res) => {
//   const partnerRepository = getRepository(PartnerSchema);
//   const partnerId = req.params.id;

//   try {
//     // Find the partner by ID and load the related skills
//     const partner = await partnerRepository.findOne({
//       where: { id: partnerId },
//       relations: ['skills'],  // Load the related skills
//     });

//     if (!partner) {
//       return res.status(404).json({ message: 'Partner not found' });
//     }

//     res.json(partner);
//   } catch (err) {
//     console.error('Error fetching partner with skills:', err);
//     res.status(500).json({ error: 'An error occurred while fetching the partner' });
//   }
// };



const { getRepository } = require('typeorm');
const {PartnerEquipmentsSchema,PartnerMediaSchema} = require('../entities/partner/partnerDetail/PartnerDetail.js'); // Adjust path as necessary

const {UserSchema,RoleSchema}=require("../entities/user/User.js")


// Controller function to add or update partner social details
// const addOrUpdatePartnerSocialDetails = async (req, res) => {
//   const { partnerId } = req.params; // Extract partnerId from route parameters
//   const {
//     facebook_link,
//     instagram_link,
//     linkedin_link,
//     website_link,
//     reach_in_kms,
//     google_id
//   } = req.body; // Extract social details from the request body

//   console.log(partnerId)

//   const partnerRepository = getRepository(PartnerSchema);
//   const socialDetailsRepository = getRepository(PartnerSocialDetailsSchema);

//   console.log(partnerRepository)

//   try {
//     // Find the partner by ID
//     const partner = await partnerRepository.findOne(partnerId);
//     console.log(partner)
//     if (!partner) {
//       return res.status(404).json({ error: 'Partner not found' });
//     }

//     // Check if social details already exist for this partner
//     let socialDetails = await socialDetailsRepository.findOne({ where: { partnerId } });

//     if (socialDetails) {
//       // Update existing social details
//       socialDetails.facebook_link = facebook_link;
//       socialDetails.instagram_link = instagram_link;
//       socialDetails.linkedin_link = linkedin_link;
//       socialDetails.website_link = website_link;
//       socialDetails.reach_in_kms = reach_in_kms;
//       socialDetails.google_id = google_id;
//     } else {
//       // Create new social details
//       socialDetails = socialDetailsRepository.create({
//         partnerId,
//         facebook_link,
//         instagram_link,
//         linkedin_link,
//         website_link,
//         reach_in_kms,
//         google_id
//       });
//     }

//     // Save the social details
//     await socialDetailsRepository.save(socialDetails);

//     res.status(200).json({ message: 'Partner social details added/updated successfully', data: socialDetails });
//   } catch (error) {
//     console.error('Error adding/updating partner social details:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// const addOrUpdatePartnerSocialDetails = async (req, res) => {
//     const { partnerId } = req.params; // Extract partnerId from route parameters
//     const {
//       facebook_link,
//       instagram_link,
//       linkedin_link,
//       website_link,
//       reach_in_kms,
//       google_id
//     } = req.body; // Extract social details from the request body
  
//     const partnerRepository = getRepository(PartnerSchema);
//     const socialDetailsRepository = getRepository(PartnerSocialDetailsSchema);
  
//     try {
//       // Find the partner by ID using a proper condition
//       const partner = await partnerRepository.findOne({ where: { id: partnerId } });
//       if (!partner) {
//         return res.status(404).json({ error: 'Partner not found' });
//       }
  
//       // Check if social details already exist for this partner
//       let socialDetails = await socialDetailsRepository.findOne({ where: { partnerId } });
  
//       if (socialDetails) {
//         // Update existing social details
//         socialDetails.facebook_link = facebook_link;
//         socialDetails.instagram_link = instagram_link;
//         socialDetails.linkedin_link = linkedin_link;
//         socialDetails.website_link = website_link;
//         socialDetails.reach_in_kms = reach_in_kms;
//         socialDetails.google_id = google_id;
//       } else {
//         // Create new social details
//         socialDetails = socialDetailsRepository.create({
//           partnerId,
//           facebook_link,
//           instagram_link,
//           linkedin_link,
//           website_link,
//           reach_in_kms,
//           google_id
//         });
//       }
  
//       // Save the social details
//       await socialDetailsRepository.save(socialDetails);
  
//       res.status(200).json({ message: 'Partner social details added/updated successfully', data: socialDetails });
//     } catch (error) {
//       console.error('Error adding/updating partner social details:', error);
//       res.status(500).json({ error: error.message });
//     }
//   };


// const addCertificate=async(req,res)=>{
//   const { partnerId, certificateTypeId, certificateNumber, certificateExpiry, mediaDocument, verificationStatus, verificationNotes } = req.body;
//   try {
//   const partnerRepo = getRepository(PartnerSchema);
//   const certificateRepo = getRepository(PartnerCertificatesSchema);

//   // Check if partner exists
//   const partner = await partnerRepo.findOne({ where: { id: partnerId } });
//   if (!partner) {
//     return res.status(404).json({ message: 'Partner not found' });
//   }


//   // Create a new certification
//   const newCertificate = certificateRepo.create({
//     partner,
//     certificate_type_id: certificateTypeId,
//     certificate_number: certificateNumber,
//     certificate_expiry: certificateExpiry,
//     media_document: mediaDocument,
//     verification_status: verificationStatus,
//     verification_notes: verificationNotes,
//   });

//   // Save the certification
//   await certificateRepo.save(newCertificate);

//   res.status(201).json({ message: 'Certification added successfully', certification: newCertificate });
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: 'Internal server error' });
// }




// }


// const addRole=async(req,res)=>{


//     try {

//         const partnerId = parseInt(req.params.partnerId, 10); 
//         const roleIds = req.body.roleIds; 
//        ;
//         if (!Array.isArray(roleIds) || roleIds.some(id => isNaN(id))) {
//             return res.status(400).json({ message: 'Invalid role IDs' });
//           }

//           const partnerRepo = getRepository(PartnerSchema);
//           const roleRepo = getRepository(PartnerRolesListSchema)
      
//         // Fetch the partner entity
//         const partner = await partnerRepo.findOne({
//           where: { id: partnerId },
//           relations: ['roles'], // Ensure roles relation is loaded
//         });
    
//         if (!partner) {
//           throw new Error('Partner not found');
//         }
    
//         // Fetch the roles
//         const roles = await roleRepo.findByIds(roleIds);
    
//         // Add roles to the partner
//         partner.roles = roles;
    
//         // Save the updated partner entity
//         await partnerRepo.save(partner);
    
//         console.log('Roles added successfully');
//       } catch (error) {
//         console.error('Error adding roles to partner:', error);
//       }





// }

// const addService=async(req,res)=>{


//     const partnerId = parseInt(req.params.partnerId, 10); // Retrieve partner ID from URL parameters
//     const {
//       service_title,
//       category,
//       sub_category,
//       service_keyword,
//       service_deliverables,
//       service_media_id,
//       service_media_youtube_link,
//       service_description,
//       service_location,
//       service_faq,
//       verification_status,
//       verification_notes
//     } = req.body;
  
//     try {
//       const partnerRepo = getRepository(PartnerSchema);
//       const serviceRepo = getRepository(PartnerServicesSchema);
  
//       // Fetch the partner entity
//       const partner = await partnerRepo.findOne({where:{ id: partnerId }});
  
//       if (!partner) {
//         return res.status(404).json({ message: 'Partner not found' });
//       }
  
//       // Create a new service entity
//       const newService = serviceRepo.create({
//         partner,
//         service_title,
//         category,
//         sub_category,
//         service_keyword,
//         service_deliverables,
      
//         service_media_id,
//         service_media_youtube_link,
//         service_description,
//         service_location,
//         service_faq,
//         verification_status,
//         verification_notes
//       });
  
//       // Save the new service entity
//       await serviceRepo.save(newService);
  
//       res.status(201).json({ message: 'Service created successfully', service: newService });
//     } catch (error) {
//       console.error('Error creating service:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }

// }


// const addPackage=async(req,res)=>{


//     const { service_id, package_name, price } = req.body; // Extract package details from request body

//     try {
//       // Get repositories for both schemas
//       const serviceRepo = getRepository(PartnerServicesSchema);
//       const packageRepo = getRepository(PartnerServicePackagesSchema);
  
//       // Check if the service exists
//       const service = await serviceRepo.findOne({where:{service_id:service_id}});
//       if (!service) {
//         return res.status(404).json({ message: 'Service not found' });
//       }
  
//       // Create a new package
//       const newPackage = packageRepo.create({
//         service: service,  // Linking to the existing service
//         package_name,
//         price,
//       });
  
//       // Save the new package to the database
//       await packageRepo.save(newPackage);
  
//       res.status(201).json({ message: 'Service package created successfully', package: newPackage });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }



// }


// const addfAQ=async(req,res)=>{

//     const { service_id, question, answer } = req.body;
//     try {
//         // Get the FAQ repository
//         const faqRepo = getRepository(PartnerServiceFaqsSchema);
    
//         // Check if the service exists
//         const serviceRepo = getRepository(PartnerServicesSchema);
//         const service = await serviceRepo.findOne({where:{service_id:service_id}});
//         if (!service) {
//           return res.status(404).json({ message: 'Service not found' });
//         }
    
//         // Create a new FAQ
//         const newFaq = faqRepo.create({
//           service: service,  
//           question,
//           answer,
//         });
    
//         // Save the new FAQ
//         await faqRepo.save(newFaq);
    
//         res.status(201).json({ message: 'FAQ created successfully', faq: newFaq });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//       }


// }

// const addLocation=async(req,res)=>{


//     const { partnerId, location_name, country_id, state_id, city_id, location_lat, location_long } = req.body;
  
//     try {
//       const partnerRepo = getRepository(PartnerSchema);
//       const locationRepo = getRepository(PartnerLocationSchema);
  
//       // Check if partner exists
//       const partner = await partnerRepo.findOne({where:{id:partnerId}});
//       if (!partner) {
//         return res.status(404).json({ message: 'Partner not found' });
//       }
  
//       // Create a new partner location
//       const newLocation = locationRepo.create({
//         partnerId,
//         location_name,
//         country_id,
//         state_id,
//         city_id,
//         location_lat,
//         location_long,
//       });
  
//       // Save the location
//       await locationRepo.save(newLocation);
  
//       res.status(201).json({ message: 'Location added successfully', location: newLocation });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }


// }


// const createUser=async(req,res)=>{

//   const { emailId, roleType } = req.body;

//     try {
//       const roleRepository = getRepository(RoleSchema);
      
     
//       let role = await roleRepository.findOne({ where: { role_type: roleType } });

//       // if (!role) {
//       //   // If the role doesn't exist, create a new role
//       //   role = roleRepository.create({ role_type: roleType });
//       //   await roleRepository.save(role);
//       // }

//       // Create a new user and associate the existing or new role
//       const userRepository = getRepository(UserSchema);
//       const user = userRepository.create({
//         emailId,
//         role,  // Reuse the existing role or associate the newly created role
//       });

//       // Save the user to the database
//       await userRepository.save(user);

//       return res.status(201).json({ message: 'User created successfully', user });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
//   }


// const getAllCustomer=async(req,res)=>{

//   try {
//     // Get the Role repository
//     const roleRepository = getRepository(RoleSchema);

//     // Find the role for "Customer"
//     const customerRole = await roleRepository.findOne({
//       where: { role_type: 'Customer' },
//     });

//     if (!customerRole) {
//       return res.status(404).json({ message: 'Customer role not found' });
//     }

//     // Get the User repository
//     const userRepository = getRepository(UserSchema);

//     // Find all users with the customerRole
//     const customers = await userRepository.find({
//       where: { role: customerRole },
//     });

//     return res.status(200).json(customers);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }




const createEquipment=async(req,res)=>{

  const equipmentRepository = getRepository(PartnerEquipmentsSchema);
  const mediaRepository = getRepository(PartnerMediaSchema);

  // Create and save the equipment

  const {
    partnerId,
    equipmentTypeId,
    equipmentName,
    equipmentModel,
    equipmentStatus,
    equipmentDescription,
    verificationStatus,
    verificationNotes,
    mediaUrls,  // Expecting an array of media URLs
  } = req.body;




  const equipment = equipmentRepository.create({
    user_id: partnerId,  // Adjusted from equipmentData.user_id
    equipment_type_id: equipmentTypeId,  // Adjusted from equipmentData.equipment_type_id
    equipment_name: equipmentName,  // Adjusted from equipmentData.equipment_name
    equipment_model: equipmentModel,  // Adjusted from equipmentData.equipment_model
    equipment_status: equipmentStatus,  // Adjusted from equipmentData.equipment_status
    equipment_description: equipmentDescription,  // Adjusted from equipmentData.equipment_description
    verification_status: verificationStatus,  // Adjusted from equipmentData.verification_status
    verification_notes: verificationNotes,  // Adjusted from equipmentData.verification_notes
  });

  const savedEquipment = await equipmentRepository.save(equipment);

  // Get the equipment ID
  const equipmentId = savedEquipment.equipment_id;

  // Prepare media entries
  const mediaEntries = mediaUrls.map(url => ({
    media_type: 'photo',  // or 'video' depending on your case
    media_url: url,
    category_type: 'Equipment',
    category_id: equipmentId,
  }));

  // Create and save all media entries
  await mediaRepository.save(mediaEntries);

  return savedEquipment;  // Return the saved equipment if needed

}



module.exports = {
  createEquipment
};
