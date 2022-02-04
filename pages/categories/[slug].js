import { useRouter } from "next/router"
import { fetchAdminAPI } from "../../api/admin";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

import styles from "./slug.module.scss";

export async function getStaticPaths() {
    const response = await fetchAdminAPI(`/categories`)
    let paths = []
    response.map(category => {
        paths.push({ params: { slug: category.slug } })
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // const router = useRouter()
    // const slug = router.query

    const categoryData = await fetchAdminAPI(`/categories/${params.slug}`)
    return {
        props: {
            categoryData,
        },
        revalidate: 1,
    }
}

const Category = ({ categoryData }) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <h2 className={styles.title}>{slug}</h2>
            <PhotoGrid photos={categoryData.photos} />
        </>
    )
}

export default Category