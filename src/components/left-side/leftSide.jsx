import React from "react";
import styles from './page.module.css';
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const LeftSide = () => {
    return (
        <>
            <div className={styles.box}>
                <h3 className="mt-3 mb-5">Video Sources</h3>
                <div class="form-check d-flex justify-content-between mb-3">
                    <div>
                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
                        <label class="form-check-label" for="radioDefault2">
                            Upload Video
                        </label>
                    </div>
                    <div class="input-group mb-3" style={{ width: '75%' }}>
                        <input type="file" class="form-control" id="inputGroupFile02" />
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                </div>

                <div class="form-check d-flex justify-content-between">
                    <div>
                        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                        <label class="form-check-label" for="radioDefault2">
                            Live Camera
                        </label>
                    </div>
                    <div class="input-group mb-3" style={{ width: '75%' }}>
                        <input type="file" class="form-control" id="inputGroupFile02" />
                        <label class="input-group-text" for="inputGroupFile02">Add link</label>
                    </div>
                </div>

                <button className={`d-flex gap-3 align-items-center ${styles.btn}`}>
                    <span>Start</span>
                    <FaPlay />
                </button>

            </div>




            <div className={styles.box}>
                <h3 className="mt-3 mb-5">Live Activity</h3>
                <div className={`d-flex flex-row gap-3 ${styles.video}`}>
                    <div>
                        <ReactPlayer url='https://youtu.be/4jnzf1yj48M?si=VKeIBqQtQ6mHXCb3' playing='true' volume={0} width={240} height={250} />
                    </div>
                    <div>
                        <ReactPlayer url='https://youtu.be/2v_7UH_nLv4?si=P3jITcTt5N1zQilD' playing='true' volume={0} width={240} height={250} />
                    </div>
                    <div>
                        <ReactPlayer url='https://youtu.be/4jnzf1yj48M?si=VKeIBqQtQ6mHXCb3' playing='true' volume={0} width={240} height={250} />
                    </div>
                </div>


            </div>


            <div className={`${styles.box} ${styles.summary}`}>
                <h3 className="mt-3 mb-5">Live Summary</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis ex blanditiis animi maxime nihil ratione dolore modi in eaque veniam libero doloribus, esse, id itaque impedit commodi? Expedita obcaecati commodi perspiciatis voluptatum hic! Quae, quaerat. Esse reiciendis fugiat odit nobis hic temporibus rerum magnam maiores earum totam voluptate beatae culpa, quis cumque nulla, quisquam quod quae, excepturi inventore quas rem natus facilis. Ipsa maxime similique quae iusto, doloribus blanditiis corrupti ipsam aliquid perferendis at optio, ratione, dolorem accusantium voluptatem non a? Eligendi nobis iusto a accusantium eum ipsa iure repellendus vitae deserunt tenetur magnam amet consequuntur suscipit, incidunt error dolorem velit eius rerum officia ab excepturi qui tempora, placeat quaerat! Iusto nihil rem consectetur corrupti omnis quia. Doloribus fugiat totam quasi laudantium! Obcaecati harum dolor necessitatibus id a sed nemo nesciunt recusandae dolore totam ipsam aspernatur quo exercitationem, quaerat velit enim, ut ea incidunt repellat repellendus autem. Sed sint perspiciatis inventore dolor asperiores ea doloremque, cumque tempore doloribus repellendus velit possimus aperiam aliquam pariatur culpa sit, eos quas? Sint quisquam neque quis, sequi unde nisi suscipit expedita voluptatibus eveniet natus corrupti doloribus eum, incidunt nihil assumenda nulla fugiat ab aperiam. Illo ducimus autem earum cupiditate labore quisquam corrupti non dolores, corporis repudiandae voluptates voluptate magnam id, adipisci mollitia iure accusamus reprehenderit tenetur dicta vero vitae nihil expedita a at? Assumenda animi repudiandae autem amet possimus ea cum quibusdam ut nobis in rerum, deserunt, debitis dolorem consectetur. Repudiandae, suscipit magnam? Architecto dolorum dignissimos et rerum cupiditate, nam id eum tempore explicabo unde sed ut consequatur dolorem magni totam. Illo iure distinctio animi non voluptatum, quas sapiente fuga harum possimus sint, nobis rem, voluptatibus mollitia necessitatibus ratione perferendis. Ratione, nesciunt ipsam! Mollitia qui eius at omnis iure necessitatibus minus nobis accusantium architecto, magni expedita optio, quos, ratione deserunt a exercitationem culpa corporis dolor consectetur tempore similique cumque saepe. Repellendus velit qui consectetur minus ad, laboriosam deleniti natus numquam. Dolorem non deleniti officiis unde nostrum necessitatibus. Rem voluptate tempore nam exercitationem recusandae ratione deleniti enim earum totam, itaque commodi beatae praesentium consequuntur est ipsam odit debitis odio magnam, a eius provident atque consequatur. Distinctio id, ipsum earum ex ipsa veniam vel in molestiae, provident, praesentium velit delectus perferendis labore! Dolorum sapiente totam animi sunt ut porro nobis, placeat dolor hic et, sed laborum veniam earum, eius mollitia id quod? Beatae nesciunt, molestias explicabo rerum nisi suscipit cupiditate laudantium, numquam dolorum, fuga dicta dignissimos molestiae distinctio quibusdam? Consectetur autem sequi voluptate accusantium doloribus deleniti, labore totam ad laborum itaque eaque voluptatum! Porro molestiae impedit aperiam sed! Asperiores, corrupti deserunt? Labore consequatur recusandae quisquam ut repellat optio itaque, et quidem facere alias commodi vitae aperiam, assumenda iusto dignissimos aspernatur quae, obcaecati error eligendi. Praesentium, aut, deleniti cupiditate eveniet quis laborum enim aliquam omnis eligendi asperiores voluptatum obcaecati, ducimus corrupti voluptatem dolores. Quam animi ducimus impedit in iusto perspiciatis iste omnis esse amet quod excepturi expedita, illum neque placeat suscipit atque quasi laboriosam at quae possimus sequi repellat! Ullam saepe quos possimus praesentium consequuntur minus.</p>
            </div>
        </>
    )
}

export default LeftSide;