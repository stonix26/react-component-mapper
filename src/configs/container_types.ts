export interface IContainerConfig<T> {
  container_name: string
  components: T[]
}

export interface IContainerComponent<T> {
  name: string
  props: T
}
