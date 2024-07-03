import React, { useState } from 'react'
import Users from '../../pages/Users'
import { IoIosArrowForward } from "react-icons/io"
import { IoMdAdd } from "react-icons/io";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Students = () => {
  const [modal, setModal] = useState(false);
  const [showPassword,setShowPassword] = useState(false)

  const handlerModal = () => {
    setModal(!modal)
  }

  const Handler = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Users>
      <div className='ml-4 lg:ml-2 h-[80vh] overflow-auto -z-40 w-[96%] lg:w-[110%] '>
        <div className='flex justify-between items-center bg-[#fff] p-4 rounded-sm shadow-sm '>
          <div className="flex justify-start items-center gap-1 ">
            <h1 className="text-[#5046E5] text-[16px] font-[500]">Student</h1>
            <IoIosArrowForward />
            <h1 className="text-[#5046E5] text-[16px] font-[500]">Student Info</h1>
          </div>

          <div>
            <div className="flex justify-center items-center  gap-3 bg-[#5046E5] mr-6 p-2 px-4 rounded-[1rem] cursor-pointer text-[#fff]" onClick={handlerModal}>
              <IoMdAdd className="text-[1.5rem]"/>
              <h1 className="font-[600] text-[14px]">ADD STUDENT USER</h1>
            </div>
            {
              modal && 
              <div className=" w-full h-[100%] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                <div className="bg-white w-[96%] lg:w-[40%] lg:h-[67%] lg:-mt-16 rounded-md -mt-10 ">
                  <div className="flex justify-between items-center px-4 py-4">
                    <h1 className="font-bold text-[18px] text-[#5046E5]">ADD NEW STUDENT</h1>
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer hover:text-white hover:bg-[#ef1010] w-8 h-8 p-2 rounded-[50%] font-normal transition ease-in-out"
                      onClick={handlerModal}
                    >
                      <path
                        d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div className="lg:border-y-[1px] lg:w-[33rem] px-4 py-4 w-full ">
                    <form className='grid grid-cols-2 w-full gap-2 mb-4 '> 
                      <div>
                        <label className='text-[15px] font-bold'>Firstname *</label>
                        <input type='text' placeholder='firstname' className='w-[100%] outline-none p-2 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                      </div>
                
                      <div>
                        <label className='text-[15px] font-bold mt-4'>Middlename *</label>
                        <input type='text' placeholder='middlename' className='w-[100%] outline-none p-2 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                      </div>
              
                      <div>
                        <label className='text-[15px] font-bold mt-4'>Lastname *</label>
                        <input type='text' placeholder='lastname' className='w-[100%] outline-none p-2 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                      </div>

                      <div>
                        <label className='text-[15px] font-bold mt-4'>Email *</label>
                        <input type='email' placeholder='email' className='w-[100%] outline-none p-2 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                      </div>

                      <div>
                        <label className='text-[15px] font-bold mt-4'>Username *</label>
                        <input type='text' placeholder='username' className='w-[100%] outline-none p-2 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                      </div>

                      <div className='relative'>
                        <label className='text-[15px] font-bold mt-4'>Password *</label>
                        <input type={showPassword ? "text" : "password"} placeholder='password' className='w-[100%] outline-none p-2 pr-10 mt-1 rounded-md focus-within:border-[#5046E5] border-[1px] [px-4] border-gray-300'/>
                        {
                          showPassword ? (
                            <IoEye className="absolute top-[34px] right-1 text-[#98A2B1] w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2" onClick={Handler}/>
                          ) : (
                            <IoEyeOff className="absolute top-[34px] right-1  w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2 text-[#1c008b]" onClick={Handler}/>
                          )
                        }
                      </div>
            
                      
                      <input type='submit' value='Submit' className='p-2 bg-[#5046E5] mt-6 rounded-md col-span-2 cursor-pointer text-[#fff] font-[500] text-[18px]'/>

                    </form>
                  </div>
    
                </div>
              </div>
            }
          </div>
        </div>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem molestiae deleniti aliquid quisquam a, ipsa dolor rerum quo repellat provident voluptates aperiam sequi omnis aspernatur libero eos nobis sed!
        Voluptatibus necessitatibus distinctio libero consectetur nobis delectus voluptatem placeat explicabo laborum tempora dolorum, dolores nihil porro rerum repellat odio quos dolore eveniet. Natus sint hic asperiores magni amet eius adipisci.
        Iusto, porro, perspiciatis aspernatur laboriosam dicta sint ab corporis consequatur natus ex perferendis expedita, recusandae temporibus quae alias vel? Sunt aspernatur corrupti deserunt nesciunt delectus, eius nobis soluta reprehenderit officia.
        Cumque, harum! Sapiente quaerat voluptates quas illum? Maiores eos cupiditate ducimus ea quae impedit, enim unde reprehenderit iste soluta incidunt iure laboriosam, voluptatum mollitia totam eligendi repudiandae id quam quod?
        Dolores vel consectetur quo, dignissimos laborum quod, voluptatibus non ducimus quos odio sint soluta saepe officiis libero omnis. A necessitatibus provident error! Perferendis illo sunt, voluptate fuga consequuntur hic suscipit!
        Quasi sunt accusamus, dolor cumque eveniet incidunt dolore! Vitae minus labore tempora, deleniti voluptas praesentium? Rerum eaque doloremque obcaecati, corporis molestias ipsa, alias sint voluptatibus atque nisi excepturi dolor quas.
        Laudantium reprehenderit cumque, mollitia odio dicta perferendis atque numquam, et voluptatem natus rem cupiditate nostrum beatae asperiores quo sequi veniam, repellendus repudiandae necessitatibus ipsum? Sequi magnam numquam quae tenetur officiis.
        Voluptate, saepe consequatur unde eligendi eos iure explicabo eaque quisquam. Rem minima suscipit delectus fugit commodi cumque aut ab, distinctio pariatur sint, numquam iste, sit molestiae ullam accusantium accusamus voluptatum.
        Eveniet, fuga? Voluptatibus commodi qui, veniam modi voluptate quos ut deleniti dicta repellendus ducimus eveniet, eos facere quam soluta veritatis repudiandae cumque nesciunt perferendis. Eligendi fugit dicta ipsa itaque eos?
        Nisi non, dolore unde sint, nesciunt hic iusto ullam aliquam ab temporibus autem veritatis magnam eveniet consequatur nemo! Obcaecati amet, reiciendis maxime perspiciatis ipsa repellendus accusamus natus sit maiores voluptate.
        Ad omnis repudiandae corrupti molestias eum sunt inventore nihil, debitis tempora quae, in, nesciunt delectus neque facere dolor suscipit. Quibusdam totam cupiditate amet nemo facilis ut, soluta doloribus non accusamus.
        Laborum, harum nulla facilis beatae veniam enim eius eveniet eos officiis sint odit quibusdam, aspernatur nihil minus. Repellat nihil numquam tempora, quis reprehenderit veniam cumque, hic perferendis facere, exercitationem similique!
        Necessitatibus in officiis labore soluta eius sequi doloribus aperiam est error distinctio. Ratione illo quo quasi molestiae est rem perspiciatis eos unde, hic magni alias illum quibusdam, vel delectus corrupti!
        Perferendis id magnam a similique veniam nesciunt aspernatur dolores, illo facilis assumenda! Quibusdam perferendis exercitationem odio dolores maiores sequi fugit enim. Nobis repudiandae quae illum, voluptatibus soluta doloribus nihil ea?
        Laborum recusandae dolore deleniti quam nam totam, accusamus nobis suscipit, qui fuga dignissimos nostrum porro aut quidem ad repellat minus explicabo optio. Repudiandae nemo dignissimos, pariatur voluptatum accusantium possimus ipsam!
        Aliquam, possimus. Rerum culpa atque deleniti pariatur quis odit illo dolorem nam doloribus itaque inventore architecto consectetur dignissimos officia quia excepturi saepe, vero maiores praesentium soluta temporibus ea. Distinctio, corrupti.
        Neque esse fugiat aperiam iste provident nemo a non minima ad vel, accusantium id vero modi. Laboriosam repellendus voluptate vitae debitis similique, quam vero quas ad minus molestiae numquam omnis.
        Explicabo ullam aperiam ipsum voluptates. Iste aliquam in soluta veritatis culpa recusandae voluptatum perferendis quod quidem sint? Blanditiis beatae eius perspiciatis temporibus sunt. Esse quos rem laudantium assumenda voluptate architecto.
        Cumque dolore maxime dolor unde odit molestiae dolores facere omnis soluta. Voluptates pariatur enim dicta dolore, non cum, perspiciatis ratione nihil dolores sint sequi numquam beatae saepe accusantium, culpa consequuntur.
        Fuga cum nesciunt nulla iste cupiditate. Voluptates saepe cumque minus voluptatum culpa odio magnam quaerat explicabo ratione enim, ut labore repudiandae, libero necessitatibus architecto et tempora commodi eaque aspernatur illum.
        Quia eveniet aperiam molestias quos labore architecto illo dolores dicta ut esse, ullam exercitationem sed quasi, totam quisquam dolorem! Vero aspernatur laudantium aliquam officiis quod incidunt repudiandae ex nam nostrum!
        Expedita atque at cupiditate neque velit est quae nesciunt inventore, corrupti dolores qui dolor officiis labore blanditiis debitis commodi excepturi. Rem voluptatum voluptas placeat aliquid ea corporis perferendis laboriosam maxime!
        Repellendus, dolorum. Libero quas iusto laborum alias quo, delectus cumque veniam. Voluptatibus at odio provident minima est reprehenderit ducimus iure fugiat id. At et maiores temporibus excepturi perferendis, quam ad?
        Voluptatum itaque, praesentium ut voluptatibus deleniti odit quod fugit nisi aspernatur reprehenderit, quos ipsam beatae fuga ullam labore facere quas aliquam molestiae fugiat eum debitis dolor! Molestiae minima nulla at?
        Reiciendis veniam magni, omnis suscipit unde adipisci? Ut recusandae, dicta earum doloremque cumque quasi mollitia possimus doloribus voluptatibus nulla, fuga quis repellat voluptatum! Dicta asperiores delectus velit ex natus voluptatibus.
        Sit rem reiciendis magni enim doloremque est minima consequuntur, architecto odit necessitatibus iste ducimus quibusdam distinctio a laboriosam nesciunt veritatis id illo pariatur blanditiis, odio nisi quas voluptatum. Nulla, harum!
        Facere, voluptates culpa. Molestias dolor blanditiis nemo officia nobis. Sunt blanditiis aspernatur dolor ducimus? Repellendus, et facere! Labore assumenda consectetur atque? Quas rem rerum, voluptas corporis maxime facere. Necessitatibus, optio.
        Minus animi ad cumque nemo soluta ducimus ratione doloribus aut, sit libero itaque maiores et eum iure earum reiciendis sequi sed dolor tenetur, ipsam repudiandae nesciunt consequuntur. Obcaecati, repellendus ipsam!
        Impedit officiis magnam placeat eligendi debitis quasi animi odit minima aut quibusdam ea quam ullam, perspiciatis blanditiis! Odit sit animi aperiam omnis ea dolorum quasi, reiciendis incidunt facilis, modi molestias?
        Distinctio voluptatibus esse nesciunt molestiae inventore sapiente nihil reprehenderit nemo voluptates rem, dignissimos voluptas accusantium dolores debitis fugiat, modi quibusdam autem, possimus libero laborum vero? Qui sapiente sit voluptatem harum.
        Praesentium, placeat possimus! Nisi assumenda molestias omnis accusantium voluptatem quia ipsum ducimus inventore, quam debitis reprehenderit, quasi recusandae et eius alias esse? Asperiores rerum sit deleniti. Fugiat nam neque ad.
        Voluptatem mollitia aliquam, odio tenetur expedita veritatis necessitatibus commodi fuga atque quidem pariatur esse. Quo animi omnis possimus, porro aliquam quasi minima libero a eos qui eligendi consequuntur natus quae?
        Id possimus ea numquam voluptas! Debitis, quos tempore. Nemo minus iste repellendus quidem excepturi consequuntur ipsa sunt, exercitationem necessitatibus beatae nostrum voluptates animi, praesentium cum? Fugiat deleniti quaerat dolor repudiandae.
        Facilis cumque inventore, enim labore tenetur voluptatem hic vero, expedita provident laborum voluptate facere. Maxime, laudantium. Illo quo maiores, dolore aliquid ut dolorem soluta quas illum molestias officiis. Fuga, perspiciatis.
        Perspiciatis nobis, excepturi corrupti iusto ab consectetur quidem a aperiam cum. Dignissimos doloremque voluptatibus facere perspiciatis! Ea reiciendis porro vero, voluptas odit maxime asperiores earum nam exercitationem, eos vitae dicta.
        Saepe excepturi consectetur nisi assumenda perspiciatis soluta! Nulla consequuntur, ipsa asperiores a laborum amet recusandae aliquid provident adipisci aliquam, fugiat placeat nobis necessitatibus, accusamus delectus officiis possimus illo voluptates ratione!
        Fuga praesentium ipsa laboriosam nihil dicta eveniet ea id a, suscipit reiciendis consequuntur doloremque dolor facilis velit delectus quasi, aliquam minima dolorum doloribus iste! Impedit laborum quibusdam maxime numquam quaerat.
        Ex incidunt, saepe velit error magnam earum porro quas unde accusantium omnis? Doloremque perferendis saepe a molestias accusantium! Porro omnis fugiat maxime nulla animi voluptatibus suscipit obcaecati eius sapiente quaerat.
        Adipisci at, optio aperiam libero ipsam dolorum! Molestiae officia magnam eius! Aut voluptatibus dolore error, eos cum explicabo eius facere esse deleniti nobis consequatur perspiciatis voluptas nisi nesciunt quae provident?
        Laudantium consequatur perspiciatis rem repellat illum, nemo id in, quas dolores quis tenetur aliquid tempore molestiae vero omnis nam, ab inventore ratione eos ad sint. Soluta libero cupiditate quos expedita.
        Corporis aspernatur facilis nulla eveniet consequuntur dignissimos culpa, veritatis vel officia reprehenderit, obcaecati consectetur repellat voluptate sunt nobis tempora earum. Quas in ullam reprehenderit cupiditate voluptatem animi consectetur tempore neque!
        Nesciunt consectetur sit magni assumenda quisquam modi a possimus, quas corrupti. Ad est assumenda quidem voluptatum blanditiis quod recusandae temporibus aliquid. Enim officia dolore repellendus quos perferendis praesentium consequuntur est.
        Quas exercitationem et aperiam voluptate maxime atque error asperiores nam reiciendis nemo corrupti, accusamus debitis, iure consectetur dolor ex labore ad? Itaque dolorum eum sequi nisi minus voluptatem nemo porro?
        Id reiciendis voluptates deserunt. Quis ab voluptas delectus quibusdam modi ex rerum, ipsum incidunt. Incidunt dolorum a similique ducimus laborum. Nesciunt adipisci aut illo reprehenderit nam voluptate sunt fugit officiis?
        Laborum repudiandae cupiditate deleniti consequuntur nemo magnam dolorem quasi amet ipsum? Expedita, iste nesciunt adipisci, similique molestiae soluta accusamus consectetur neque repellat, doloremque exercitationem? Quas exercitationem nihil expedita similique corrupti.
        Tempora blanditiis sapiente perferendis dolorem nam rem reiciendis necessitatibus harum omnis maxime, ea exercitationem labore sint quas atque quaerat quia dolores laboriosam consectetur similique itaque fugiat. Autem voluptatem excepturi sequi.
        Eius, debitis asperiores, facere eum fugiat ipsum natus amet dolore optio perferendis iure necessitatibus delectus maxime. Odio ab esse explicabo ducimus quaerat nisi unde provident fugiat error. Molestiae, necessitatibus similique?
        Suscipit, eos perspiciatis quae, quas ullam similique omnis maxime quod libero molestias exercitationem assumenda dolorem animi commodi architecto repellat sunt laborum beatae ex veritatis non. Nostrum sed voluptatibus vero alias.
        Enim nemo soluta, animi hic ipsam, minima dolore quod repudiandae explicabo similique ad at neque itaque fugit praesentium esse? At est suscipit laboriosam alias deleniti! Ex pariatur ducimus iure aspernatur.
        Quaerat repudiandae sit illo assumenda, vitae nostrum officiis minima saepe quo iste? Ut unde amet aliquid doloremque facere accusantium, labore nostrum hic quibusdam perspiciatis exercitationem impedit, dolore excepturi praesentium eaque!
        Animi aut nam, odit culpa reprehenderit provident quis quia explicabo excepturi fuga ipsum nisi distinctio quam laudantium ab, nihil iure ipsa accusantium quidem porro molestiae illum blanditiis! Harum, facere obcaecati!
        Consequuntur delectus architecto provident repellat iure, explicabo deserunt blanditiis? Vitae, eos. Ex deserunt dolorem debitis temporibus natus. Optio ipsa nisi vero culpa sed consectetur impedit, soluta error sequi natus reprehenderit?
        Dolores ipsa debitis facilis blanditiis fuga ratione nesciunt sit hic. Blanditiis, tempore. Numquam atque et sunt, ratione accusantium id dicta magnam doloribus? Omnis veniam in soluta ratione amet ullam unde.
        Illum aspernatur suscipit accusantium doloremque quam, odit ullam. Molestiae laboriosam excepturi nulla dolorem fuga quasi veritatis debitis cupiditate numquam vitae magni quidem, aut quis porro voluptate consequatur, eaque fugit illo.
        Debitis nemo iure cumque incidunt quos ut praesentium voluptatem ratione ipsam, a culpa eos voluptatibus provident accusantium sint soluta inventore minima officiis autem ducimus! Assumenda totam impedit temporibus sapiente in!
        Expedita, enim quas aperiam minima accusamus porro assumenda corrupti tempora corporis repudiandae cumque culpa, eos officia id hic neque perspiciatis quia aspernatur? Quia neque expedita perspiciatis velit molestiae animi reiciendis.
        Fuga, sapiente porro. Possimus modi saepe asperiores minus sit! Ipsam magnam hic laborum optio, possimus fugiat voluptatum quisquam, unde, iure consequatur nam porro? Corrupti laborum similique voluptatum optio, at saepe?
        Fuga doloremque repellendus adipisci consequatur sapiente accusamus quisquam corrupti, exercitationem non doloribus atque incidunt voluptate. Cum quia dignissimos illum dolor ducimus rem, molestiae quo, vel error corporis autem, nemo iste?
        Quibusdam quos dolorum aspernatur neque? Ipsa molestiae distinctio est commodi quaerat reiciendis obcaecati dolor tenetur. Corrupti ullam architecto repudiandae consectetur aliquid, odit, repellat unde eligendi voluptatem reiciendis enim placeat aut.
        Eligendi quisquam fugit iure distinctio cupiditate, alias rerum architecto ratione consectetur libero excepturi ducimus porro nisi. Fugit, recusandae atque magni nam voluptates earum voluptatibus excepturi delectus voluptas nihil quasi explicabo.</div>
      </div>
    </Users>
  )
}

export default Students